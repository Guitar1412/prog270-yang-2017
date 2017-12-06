FROM charliecalvert/apache
RUN apt-get install sudo -y
RUN useradd -ms /bin/bash bcuser
RUN usermod -aG sudo bcuser
RUN echo "bcuser:bcuser" | chpasswd
RUN su bcuser
RUN mkdir /home/bcuser/Git
RUN cd /home/bcuser/Git && git clone http://git@github.com/charliecalvert/JsObjects.git
RUN su -c "cd /home/bcuser/Git/JsObjects/Utilities/SetupLinuxBox && ./UbuntuSetup b" bcuser
RUN cd /home/bcuser/Git/JsObjects/Utilities/NodeInstall && echo bcuser | sudo -S ./NodeInstall.sh
RUN cd /home/bcuser/Git/JsObjects/Utilities/NodeInstall && echo bcuser | sudo -S ./NpmHelper e

