# dummy-api-testing

API tests example with serenityjs

### Installation

```
npm i
```

### Execution


```
npm run test
or
npm run test:report
```

#### Running specific tests

```
TAGS="@peopleEdit" npm run tags
or
SCENARIO="Insert person" npm run scenario
or
FILE="people" npm run file
or
DIR="people" npm run dir
```

#### Report


```
npm run report                          # The report will available at 'target/site/serenity/index.html'
```