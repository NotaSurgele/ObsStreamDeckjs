# ObsStreamDeckjs

#### What is ObsStreamDeckjs ?

&nbsp;&nbsp;*__ObsStreamDeckjs is a piece of software that can control obs scene remotly. You can also play the different sounds that you configure in the current scene. Work on Smartphone, Tablet and PC__* <br><br><br> <img src=".picture/app.png" width="450" height="600">

# What do you need ? (Dependencies)

&nbsp; __First you will need obs.__
[Obs](https://obsproject.com/fr) __<--__ <br><br> ![obs](.picture/obs_1.png) <br><br>
&nbsp; __Then you will need__ [obs-websocket](https://github.com/Palakis/obs-websocket/releases/tag/4.9.0) __<--__ (__go at the bottom of the page for the installer__) <br><br> ![obs-websocket](.picture/websocket_1.png)<br><br>
&nbsp; __Nodejs / NPM__ __-->__ [Nodejs / NPM](https://nodejs.org/en/) <br><br>![node](.picture/nodejs_1.png)<br><br>
&nbsp; __Yarn__ __-->__ [YarnPackageManager](https://classic.yarnpkg.com/en/docs/install/#windows-stable) (__Click "Alternatives" for windows installer__)<br><br>![yarn1](.picture/yarn_1.png)<br>![yarn2](.picture/yarn_2.png)<br><br>

# How to build ?

## obs-websocket server configuration:
&nbsp; First go to obs. Then go to tool/WebSocket server settings <br><br> ![tool](.picture/obs_tool_1.png) <br><br>
&nbsp; __Then put this options. In the password section input: `StreamDeckjs`__: <br> <img src="./.picture/obs_tool_2.png" style="margin-left"><br><br>

## Build:
______
&nbsp; First start your Obs.
&nbsp; Then simply run the build.bat by double cliking on it. The server should then start. <br>
&nbsp; Copy past: ` > Network: http://Your-ip-address:3000/`, and enter it in your browser.<br>
&nbsp; Then enter the address ip that you just coppied (for example) `192.168.54.544` in the alert box and here we go !! :).<br>
&nbsp; You should now see your scenes.