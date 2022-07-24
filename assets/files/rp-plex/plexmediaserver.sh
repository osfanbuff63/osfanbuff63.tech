#!/bin/bash
sudo apt install curl # I'm not sure this is included by default
curl https://downloads.plex.tv/plex-keys/PlexSign.key | sudo apt-key add -
echo deb https://downloads.plex.tv/repo/deb public main | sudo tee /etc/apt/sources.list.d/plexmediaserver.list
sudo apt update && sudo apt upgrade # This makes sure we are up-to-date
sudo apt install plexmediaserver
