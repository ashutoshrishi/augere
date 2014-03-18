#!/usr/bin/python

import os
import sys
from subprocess import call

# Configure this to the location of nw binary of node-webkit package
NW_BINARY = "/home/rishi/workspace/sources/node-webkit-v0.9.2-linux-x64/nw"


def createBuildList():
    """Create a list of files and folders that need to be included."""
    buildList = []
    for dirname, dirnames, filenames in os.walk('.'):
        # Remove .git directories
        if '.git' in dirnames:
            dirnames.remove('.git')

        for subdirname in dirnames:
            buildList.append(subdirname + "/")

        for filename in filenames:
            buildList.append(filename)

        break
    return buildList

if __name__ == '__main__':
    build_name = "run.nw"
    if (sys.argv[1]):
        build_name = sys.argv[1]

    buildList = createBuildList()
    # Call the zip
    print "Building following files: "
    print buildList
    print "\nCreating zip..."
    call(['zip', '-r', build_name] + buildList)
    print "\nRunning through node-webkit binary..."
    call([NW_BINARY, build_name])
