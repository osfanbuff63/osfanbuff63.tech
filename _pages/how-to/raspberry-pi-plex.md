---
layout: single
title: "How To: Turning a Raspberry Pi into a Plex server"
permalink: /how-to/raspberry-pi-plex
comments: true
---
<!--TODO: make an FTP guide inside of this using vsftpd?-->
## How to turn a Raspberry Pi into a Plex server

The [Raspberry Pi](https://raspberrypi.org) is a great device to run many things off of, including servers. I've spent some time recently moving my [Plex](https://plex.tv) library to a Raspberry Pi , so I thought I'd spend some time writing a guide on it.

I'll be using Ubuntu instead of Raspberry Pi OS, for multiple reasons, but this guide may work on Raspberry Pi OS (note: untested!), given I believe `plexmediaserver` is in `apt`?
{: .notice--info}

## What you need

### Required

- A [Raspberry Pi](https://raspberrypi.org) (mine uses a Raspberry Pi 4 model B with 4GB of RAM<!-- TODO: find out if this is right-->) with access to the Internet
- A microSD card to run the OS off of. At a minimum, this should have 16GB of storage, but I got [this 128GB drive from Micro Center](https://www.microcenter.com/product/626486/Premium_128GB_microSDXC_Card_UHS-I_Flash_Memory_Card_C10_U3_V30_A1_Micro_SD_Card_with_Adapter) for $13, so if you live near one I recommend that.
  - If your computer doesn't have a SD card slot, you can purchase an [SD to USB adapter](https://www.amazon.com/UGREEN-Reader-Memory-Windows-Simultaneously/dp/B01EFPX9XA/ref=sr_1_2?keywords=usb+sd+card+adapter&qid=1657498695&refinements=p_89%3AUGREEN&rnid=2528832011&s=electronics&sr=1-2).
  - If your microSD card doesn't come with an microSD to SD adapter (which most do) and you don't have one, you can purchase one [here](https://www.amazon.com/SanDisk-microSD-Memory-Adapter-MICROSD-ADAPTER/dp/B0047WZOOO/ref=sr_1_3?crid=3V0RZF2SW2WAV&keywords=microsd+to+sd&qid=1657498787&s=electronics&sprefix=micro+sd+to+sd%2Celectronics%2C92&sr=1-3) *note: I am not an Amazon affiliate!*
- A computer with access to the Internet

### Recommended

- A USB drive (this is only needed if your Plex media size is larger than your SD card size subtracted by your OS size - Ubuntu is around 9GB to my knowledge)
- A case for your Raspberry Pi, preferably with a fan and/or heatsinks (I use [this one](https://www.microconnectors.com/aluminum-raspberry-pi-4-model-b-case-with-fan/))
- If not included with your case, an appropriate screwdriver
- A Plex account, this can be made for free at [plex.tv/sign-up/](https://www.plex.tv/sign-up/)

## The guide

### Part 1: Setting up our microSD card

You might be able to use a USB drive instead for this part, but Raspberry Pis boot to a microSD card if it is inserted, so for ease I'm using one.
{: .notice--info}

Screenshots in this section are from Windows unless noted.
{: .notice--info}

The data on your SD card will be cleared! Make sure to make backups!
{: .notice--danger}

Let's get started!

1. Log onto any computer with access to the Internet, and download the Raspberry Pi Imager from [this link](https://www.raspberrypi.com/software/) for your OS.
2. Run the file you just downloaded. On Windows, this is `imager_latest.exe`.
3. Follow the installation process, and check `Run Raspberry Pi Imager` at the end.
{% figure caption:"You should be on a screen like this!"%}
![Raspberry Pi Imager](/assets/images/rp-plex/raspberry-pi-imager.png)
{% endfigure %}
4. Plug your microSD card into a reader on your computer, using adapters if needed.
5. Select your operating system of choice. I used Ubuntu Desktop, but any OS should be fine (or Ubuntu Server, which I recommend, but I made the mistake of getting Desktop instead of Server :P)
{% figure caption:"Select an OS, Ubuntu is pictured" %}
![OS selection](/assets/images/rp-plex/select-os-ubuntu.png)
{% endfigure %}
6. Select your SD card.
7. Select `Write`.
8. Be patient, it can take a while. Once complete, remove the microSD card from your computer.

You can now turn off this computer if you don't plan to use it later.
{: .notice--info}

### Part 2: Installing our OS

If you plan to use a case for your Raspberry Pi, put that on before continuing.
{: .notice--info}

Don't have the power plugged into your Raspberry Pi until it says otherwise!
{: .notice--warning}

The steps may be slightly different for different models.
{: .notice--info}

#### Part 2.1: Getting ready

1. Insert the microSD card into your Raspberry Pi, along with a mouse and keyboard and a mini-HDMI to HDMI cable.
2. Plug the mini-HDMI to HDMI cable into a monitor. A TV will work.
3. Insert the USB-C power to the Raspberry Pi and watch it boot up! A rainbow boot screen is normal.

#### Part 2.2: Installing Ubuntu

1. Once on a `Welcome to Ubuntu` screen, continue through the system setup.
2. You should select your language, location, connect to the Internet and many other things in this step. Enter this information correctly.
3. Once done, if prompted to restart, comply.
4. Make sure to run the Software Updater if not prompted that the software is out of date.

### Part 3: Setting up Plex Media Server

If you are changing your Plex server from a different device, make sure to copy all the files to a USB drive before continuing.
{: .notice--info}

Don't have the USB drive plugged in while booting the system. The first time my Raspberry Pi tried to boot to it I think...?
{: .notice--warning}

Make sure you are finished with OS setup & updates, and if you didn't connect to the Internet do so. This is necessary for the server to work correctly.
{: .notice--info}

1. If you aren't in your OS, turn on your Raspberry Pi.
2. Plug in your USB drive with the Plex server files on it or download them from the cloud if you used that method.
3. Open a terminal and run these commands: (If you don't want to run all these yourself, grab [this shell script](/assets/files/rp-plex/plexmediaserver.sh) and run `sudo bash plexmediaserver.sh`.)
<!-- markdownlint-disable -->
{% highlight shell %}
sudo apt install curl # I'm not sure this is included by default
curl https://downloads.plex.tv/plex-keys/PlexSign.key | sudo apt-key add -
echo deb https://downloads.plex.tv/repo/deb public main | sudo tee /etc/apt/sources.list.d/plexmediaserver.list
sudo apt update && sudo apt upgrade # This makes sure we are up-to-date
sudo apt install plexmediaserver
{% endhighlight %}
<!-- markdownlint-enableconfig -->
4. Open the Apps menu from the bottom left corner and select `plexmediaserver`. This will open a tab in your browser (if you are following this tutorial with Ubuntu - Firefox will open)
5. Follow the setup. I've included pictures with captions for you.
{% figure caption:"Select a name for your server. Credit: [Plex](https://support.plex.tv/articles/200288896-basic-setup-wizard/) %}
![Select a name](/assets/images/rp-plex/plex-media-server-1.png)
{% endfigure %}

{% figure caption:"Organize your library files. You can select it straight from a USB drive, it would be mounted in `/media/username/usb_name/` with `username` and `usb_name` being placeholders. Credit: [Plex](https://support.plex.tv/articles/200288896-basic-setup-wizard/) %}
![Import libraries](/assets/images/rp-plex/plex-media-server-2.png)
{% endfigure %}

{% figure caption:"Once here, press 'Done'. This will open a Plex tab in your browser. Note however, that your library won't show up immediately. Credit: [Plex](https://support.plex.tv/articles/200288896-basic-setup-wizard/)" %}
![Done!](/assets/images/rp-plex/plex-media-server-3.png)
{% endfigure %}

### Part 4: Stopping the firewall

If you have a firewall enabled, you will need to let Plex through it.

1. Open a terminal.
2. Run `sudo ufw status` and if it isn't enabled, skip this section.
3. If it *is*, then run these commands or [this shell script](/assets/files/rp-plex/firewall.sh): (Source: [Plex](https://support.plex.tv/articles/201543147-what-network-ports-do-i-need-to-allow-through-my-firewall/). Read that if you want to know what the ports do)
{% highlight shell %}
sudo ufw allow 32400/tcp # REQUIRED
sudo ufw allow 1900/udp # optional
sudo ufw allow 5353/udp # optional
sudo ufw allow 8324/tcp # optional
sudo ufw allow 32410,32412,32413,32414/udp # optional
sudo ufw allow 32469/udy # optional
{% endhighlight %}

### Part 5 (Bonus): Accessing your Plex library

Having a Plex library is almost no good without a device to access it. Plex has apps for all major operating systems, found in the store. You can also download a client for:

- Windows: From [here](https://www.plex.tv/media-server-downloads/#plex-app) or via `winget install --id Plex.Plex`
- macOS: From [here](https://www.plex.tv/media-server-downloads/#plex-app)
- Linux: From the [Snap Store](snap://), or `sudo snap install plex-client`, or this embed link:

<iframe src="https://snapcraft.io/plex-desktop/embedded?button=black" frameborder="0" width="100%" height="300px" style="border: 1px solid #CCC; border-radius: 2px;"></iframe>

- Android: From the [Google Play Store](https://plexapp.onelink.me/Sm8U/android/)
- iOS: From the [App Store](https://plexapp.onelink.me/Sm8U/ios/)

For any other downloads, check [Plex's website](https://www.plex.tv/media-server-downloads/#plex-app).

## Final notes

Leave a comment if you have any questions! This guide took a while to make, just like the other one, and so I hope this has helped you! If you don't have a GitHub account, [sign up for one](https://github.com/join) or [contact me using another method](/contact).
