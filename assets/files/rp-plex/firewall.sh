#!/bin/bash
sudo ufw allow 32400/tcp # REQUIRED
sudo ufw allow 1900/udp # optional
sudo ufw allow 5353/udp # optional
sudo ufw allow 8324/tcp # optional
sudo ufw allow 32410,32412,32413,32414/udp # optional
sudo ufw allow 32469/udy # optional
