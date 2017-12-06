FROM guitar1412/ubuntu-base

RUN apt-get install apache2 -y
env APACHE_RUN_USER    www-data
env APACHE_RUN_GROUP   www-data
ENV APACHE_LOG_DIR     /var/log/apache2
env APACHE_PID_FILE    /var/run/apache2.pid
env APACHE_RUN_DIR     /var/run/apache2
env APACHE_LOCK_DIR    /var/lock/apache2

ADD 000-default.conf   /etc/apache2/sites-enabled/

RUN mkdir -p $APACHE_RUN_DIR $APACHE_LOCK_DIR $APACHE_LOG_DIR

EXPOSE 80

CMD ["apache2", "-D", "FOREGROUND"]

