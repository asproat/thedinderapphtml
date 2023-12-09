#!/usr/bin/env python3
# find duplicated css classes
import sys
import os
import re
import subprocess

minMatch = 0.75

if len(sys.argv) > 1:
	try:
		minMatch = float(sys.argv[1])
		if minMatch > 1.0:
			minMatch = minMatch / 100.0
	except:
		print("Invalid minium match percentage")
		quit()

cssFiles = subprocess.check_output("find . -name \"*.css\" -print", shell=True).split()

print("number of css files")
print(len(cssFiles))

cssClasses=dict()
mediaValue = dict()
classNames=[]

for cssFile in cssFiles:
	cssLines = open(cssFile, "r").readlines()

	for cssLine in cssLines:

		mediaMatch = re.findall("^ *\@media \( *([a-z\-A-Z0-9]+): ([a-zA-Z0-9]+) *\) *\{", cssLine)
		if len(mediaMatch) == 1 and len(mediaMatch[0]) == 2:
			mediaValue[mediaMatch[0][0]]= mediaMatch[0][1]
		else:
			classNameMatch = re.findall("^ *(\.[a-zA-Z0-9, \.]+) *\{", cssLine)
			if len(classNameMatch) == 1 and len(classNameMatch[0]) > 0:

				classNames=[]
				classList = classNameMatch[0]
				spacedClassNames = classList.split(",")
				for className in spacedClassNames:
					fixedClassName = className.strip()
					classNames.append(fixedClassName)
					if fixedClassName not in cssClasses.keys():
						cssClasses[fixedClassName] = dict()

					if len(mediaValue.keys()) > 0:
						mediaName = next(iter(mediaValue.keys()))
						cssClasses[fixedClassName][f"media"] = f"{mediaName}: {mediaValue[mediaName]}"
						mediaValue = dict()
			else: 
				classSettingMatch = re.findall("^ *([a-z\-A-Z0-9]+): ([^;]+) *;", cssLine)				

				if len(classSettingMatch) == 1 and len(classSettingMatch[0]) == 2:
					for className in classNames:
						cssClasses[className][classSettingMatch[0][0]] = classSettingMatch[0][1]


print(f"classCount: {len(cssClasses.keys())}")

for classKey in cssClasses.keys():

	if len(cssClasses[classKey].keys()) == 0:
		print(f"no settings: {classKey}")
	else:

		for checkClassKey in cssClasses.keys():
			if checkClassKey != classKey and len(cssClasses[checkClassKey].keys()) > 0:

				matchCount = 0

				for classSetting in cssClasses[classKey].keys():

					if classSetting in cssClasses[checkClassKey].keys() and \
						cssClasses[classKey][classSetting] == cssClasses[checkClassKey][classSetting]:
						matchCount+=1

				matchPercent = matchCount / len(cssClasses[classKey].keys())				
				matchCheckPercent = matchCount / len(cssClasses[checkClassKey].keys())
				if matchPercent >= minMatch and matchCheckPercent >= minMatch:
					print(f"*** {classKey} ({matchCount} of {len(cssClasses[classKey].keys())} %: {matchPercent}) matches {checkClassKey} ({matchCount} of {len(cssClasses[checkClassKey].keys())} %: {matchCheckPercent})")
