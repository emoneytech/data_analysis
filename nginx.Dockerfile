FROM nginx

RUN apt-get update -qq && apt-get -y install apache2-utils

ENV RAILS_ROOT /app

WORKDIR $RAILS_ROOT
RUN mkdir log
RUN mkdir -p /etc/ssl/certs/public
RUN mkdir -p /etc/ssl/certs/private
COPY certs/public/cert.pem /etc/ssl/certs/public/cert.pem
COPY certs/public/dhparam.pem /etc/ssl/certs/public/dhparam.pem
COPY certs/private/key.pem /etc/ssl/certs/private/key.pem
COPY public public/
COPY nginx.conf /tmp/docker.nginx
RUN envsubst '$RAILS_ROOT' < /tmp/docker.nginx > /etc/nginx/conf.d/default.conf
EXPOSE 80 443
CMD [ "nginx", "-g", "daemon off;" ]