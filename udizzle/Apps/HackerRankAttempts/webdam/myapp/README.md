# myapp
My cool WebDam app

## DEV Notes: 
1. Incomplete "AZ" font icon should toggle behavior implementation. 
2. Actual JSON AJAX request made to JSON hostin g service myjson.
URL: https://api.myjson.com/bins/1773un


## Install It
```
npm install
```

## Run It
#### Run in *development* mode:

```
npm run dev
```

#### Run in *production* mode:

```
npm run compile
npm start
```

#### Run tests:

```
npm test
```

#### Deploy to the Cloud
e.g. CloudFoundry

```
cf push myapp
```

### Try It
* Point you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the example REST endpoint `curl http://localhost:3000/api/v1/examples`
   


### Source for generator app
Special Thanks to :)
https://github.com/cdimascio/generator-express-no-stress