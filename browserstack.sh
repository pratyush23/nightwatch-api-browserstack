#!/bin/bash

  # Browser Name
  browsers="$1"

  # Environment
  environment="$2"

  # Feature file to execute
  feature_file="$3"

  # Making the backup of conf file to revert it later
  cp conf/browserstack.conf.js conf/browserstack.test.conf.js

  # Quick hack for changing the environment to live
  if [ $environment = "live" ] ; then
    mv conf/browserstack.conf.js conf/browserstack.new.conf.js
    sed -e 's/www.test/www/g' conf/browserstack.new.conf.js > conf/browserstack.conf.js
  fi

  # Kill obsolete `browserstack-local` instance.
  kill $(lsof -t -i:45691)

  # Run tests sequentially.
  node local.runner.js -c conf/browserstack.conf.js -t features/$feature_file -e ${browsers}

  # Reverting the conf file for the next test
  mv conf/browserstack.test.conf.js conf/browserstack.conf.js

  # Removing the file we created for live environment
  if [ -f conf/browserstack.new.conf.js ] ; then
    rm conf/browserstack.new.conf.js
fi