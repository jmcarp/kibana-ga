# Kibana Google Analytics plugin

## Install

`./bin/kibana plugin --install --url https://github.com/jmcarp/kibana-ga/releases/download/v0.1.0/kibana-ga-0.1.0.tar.gz`

## Configure

```yaml
ga.enabled: true
ga.name: myTracker
ga.tracker: UA-XXXXX-xx
ga.fields:
  cookieName: gaCookie
  cookieExpires: 86400
ga.set:
  forceSSL: true
  anonymizeIp: true
```
