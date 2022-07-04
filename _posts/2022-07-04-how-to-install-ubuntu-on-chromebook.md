---
layout: single
title: "How To: Installing Ubuntu on a Chromebook"
date: 2022-07-04 09:45:00 -0400
comments: true
---

## How to install Ubuntu on a Chromebook

This guide serves as an alternative to [Canonical's own guide](https://ubuntu.com/tutorials/install-ubuntu-on-chromebook#1-overview). This guide has become outdated over the years, and so this is an alternate guide.

## The problems with Crouton

The script Canonical uses in that guide is [crouton](https://github.com/dnschneid/crouton), which [went maintance-only in late 2021](https://github.com/dnschneid/crouton/discussions/4654), and so the default (xenial) is EOL, and focal is in "beta", and jammy isn't supported at all, although there [is a PR for it](https://github.com/dnschneid/crouton/pull/4727). You also end up with a very barebones version of Ubuntu, which isn't ideal.

In theory, you could also use [Crostini](https://chromium.googlesource.com/chromiumos/docs/+/HEAD/containers_and_vms.md), but I'm just assuming that you want more than that.

## The advantanges of this method

This method allows to install a **full Ubuntu setup** with most likely **support for all versions** and therefore . As well, it requires almost **nothing** to work and **no hardware modification**. Hardware modification can be made to make this method even better, but I'll leave a link to how to do that.

This guide was tested on an Acer Chromebook 14, and works perfectly. Offtopic, but the battery in that one died and so it needs to be plugged in :P

This method will only work on x86 Chromebooks, and not ARM ones.
{: .notice--info}

## The Guide

### What you need

You will need:

- Your Chromebook to turn into a Ubuntu machine
- A PC with the ability to create a bootable USB stick for Ubuntu. If you don't have a system, most likely you can do it via Crostini.
- Access to the Internet

### Part 1: Entering Developer Mode

For any of this to work, we need to enter 'developer mode' on our Chromebook. Here's how:

1. Turn your Chromebook off if it was already on.
2. Turn your Chromebook on, but simultaneously hold the `Esc`, `Refresh` and `Power` keys all at once. This will pop up a screen relating to Recovery Mode.
3. Once you hit that screen, hit `Ctrl` + `D`. If you see a prompt that OS verification is off, press `Ctrl` + `D` again.

This will wipe all files on your system! Make sure you take backups if you have any important files on your Chromebook!
{: .notice--danger}

The OS verification prompt will show up on every boot now, but you can press `Ctrl` + `D` to go into Developer Mode.
{: .notice--info}

### Part 2: Enabling Booting from a USB and installing SeaBIOS

Now we'll enable booting from a USB drive. We'll also install custom firmware, but this isn't strictly needed, it just makes the process simpler.

If you want to install a UEFI firmware instead, you will need to disable hardware write-protect, which requires hardware modification. This way, you don't need to modify your hardware, although I do recommend it (I haven't done it with my own Chromebook though, since I don't have a small enough screwdriver.)
{: .notice--info}

#### Part 2.1: Enabling flags

1. On any Chrome OS screen, press `Ctrl` + `Alt` + `Right Arrow` to open a shell.
2. Sign in as `chronos` with no password and you'll have a full Bash shell and `sudo` access off the bat.
3. Run `sudo crossystem dev_boot_usb=1` and then `sudo crossystem dev_boot_legacy=1`.
4. Run this set of commands. This will take you to an interface where you can install SeaBIOS.

{% highlight shell %}
cd; curl -LO mrchromebox.tech/firmware-util.sh
sudo install -Dt /usr/local/bin -m 755 firmware-util.sh
sudo firmware-util.sh
{% endhighlight %}

#### Part 2.2: Installing SeaBIOS

You should see a screen like this one, if you don't, try [step 4 again](#part-21-enabling-flags).
{% figure caption: "Credit: [mrchromebox.tech](https://mrchromebox.tech)" %}
![mrchromebox.tech picture](/assets/images/chromeos-ubuntu/fwutil_cros_wp-on.png)
{% endfigure %}

1. Select option 1 by pressing 1.
2. If it asks you for a default boot device, select 'Internal storage'
3. If it asks you for any other options, select 'No'.
4. Turn off your Chromebook.

### Part 3: Making an Ubuntu Live USB

Now we'll make a Ubuntu Live USB drive. This can be done at any point, but we will need it in the next step.

BalenaEtcher is not the only application that can do this, but it is recommended since it works on Windows, macOS, and Linux. [Rufus](https://rufus.ie/) is an alternative for Windows.
{: .notice--info}

Your USB drive will be formatted when you flash the image to it! Make backups of any important files before continuing!
{: .notice--danger}

1. Download the latest Ubuntu Desktop image for your preferred version from [here](https://ubuntu.com/download/desktop).
2. Download the latest version of BalenaEtcher for your OS from [here](https://www.balena.io/etcher/).
3. Plug a USB drive into your PC with *at least* 8GB of space. 12GB of space is recommended.
4. Open BalenaEtcher and select the Ubuntu Desktop image you downloaded, then select your USB drive. Select `Flash!` when you are ready! Be patient, as this can take a while.
5. Once it is complete, unplug the USB drive from your computer and keep it in a safe place.

### Part 4: Booting off of the USB and installing Ubuntu

Now we get to install Ubuntu on our Chromebook.

#### Part 4.1: Booting into SeaBIOS

1. Plug the USB drive that you flashed Ubuntu on to in [step 3](#part-3-making-an-ubuntu-live-usb)
2. Turn on your Chromebook. You'll see the normal `OS verification is off` screen, but instead of pressing `Ctrl` + `D`, press `Ctrl` + `L`.

#### Part 4.2: Booting to the USB drive from SeaBIOS

You should see a screen that looks something like this:
{% figure caption: "Credit: [mrchromebox.tech](https://mrchromebox.tech)" %}
![SeaBIOS](/assets/images/chromeos-ubuntu/seabios_boot_1.png)
{% endfigure %}

1. Within around 3 seconds from going into SeaBIOS, press `Esc` to open the boot menu. If you miss the timeout and boot into Chrome OS, turn your Chromebook off and then continue from [Part 4.1](#part-41-booting-into-seabios). It may take a few tries.
2. Select your USB drive by pressing the number located next to it. I recommend only having one plugged in so that you are sure you select the right one.
{% figure caption: "Select your USB drive. Credit: [mrchromebox.tech](https://mrchromebox.tech)" %}
![SeaBIOS Boot Menu](/assets/images/chromeos-ubuntu/seabios_boot_2.png)
{% endfigure %}

3. You should boot onto your Ubuntu Live USB! If it doesn't, turn off your Chromebook and then continue from [Part 4.1](#part-41-booting-into-seabios). It will take some time depending on your Chromebook however.

#### Part 4.3: Installing Ubuntu

This part of the guide is almost identical to Canonical's [Install Ubuntu Desktop](https://ubuntu.com/tutorials/install-ubuntu-desktop#5-installation-setup) tutorial, but I'll lead you through it anyway.

You should be sitting on a screen that looks like this before you continue:
{% figure caption: "Credit: [Canonical](https://ubuntu.com/tutorials/install-ubuntu-desktop#4-boot-from-usb-flash-drive)" %}
![Ubuntu welcome screen](/assets/images/chromeos-ubuntu/welcome-screen.png)
{% endfigure %}

I recommend plugging in a mouse if you have one at this point, but a trackpad works too.
{: .notice--info}

1. Unless you want to try out Ubuntu first, select `Install Ubuntu`.
2. Select your keyboard layout and press `Continue`.
3. Unless you want a bare-bones install or your Chromebook doesn't have enough space somehow, select `Normal installation`. I recommend selecting `Download updates while installing Ubuntu` and `Install third-party software for graphics and Wi-Fi hardware and additional media formats`.
{% figure caption: "Credit: [Canonical](https://ubuntu.com/tutorials/install-ubuntu-desktop#4-boot-from-usb-flash-drive)" %}
![Recommended options](/assets/images/chromeos-ubuntu/download-updates.png)
{% endfigure %}

4. Select `Erase disk and install Ubuntu`. You could dual-boot with Chrome OS, but it's probably not worth effort.
5. If you would like to encrypt your device, select Advanced features… > Use LVM with the new Ubuntu installation > Encrypt the new Ubuntu installation for security, then enter a security key.
6. Select `Install Now`, and select your region. If you are connected to the Internet, it will auto-detect it.
7. Create your login details, then be patient as Ubuntu installs.
8. Once it is complete, follow the prompt to restart your system.

#### Part 4.4: Booting into Ubuntu

1. With your device on the `OS verification is off` screen, press `Ctrl` + `L` again, but don't press `Esc`. This time, it will boot to the internal storage, which will be Ubuntu instead of Chrome OS.
2. Sign in with the login details that you made while installing Ubuntu.

You are done! Welcome to Ubuntu running on Chrome OS! Consider running `sudo apt update && sudo apt upgrade` in the terminal

## Final notes

I hope you enjoy using Ubuntu on what once was a Chromebook. In theory, this guide will work for even installing Windows, but [Part 3](#part-3-making-an-ubuntu-live-usb), [Part 4.2](#part-42-booting-to-the-usb-drive-from-seabios) and [Part 4.3](#part-43-installing-ubuntu) would be different. With Ubuntu, you've opened up so many more possiblities for your Chromebook!

This took around 2 hours to write, and so I hope it helps someone out here. Feel free to leave a comment below with any comments or suggestions, or [contact me](/contact)! Also, would you like to see a guide on Ubuntu setup? Leave a comment if so! I'll be watching :P
