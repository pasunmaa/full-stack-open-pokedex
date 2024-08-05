# Excercise 11.1: CI/CD warmup
 
The setup of the development project includes six full-stack developers. Besides development, the team is collectively responsible for infrastructure, testing, and CI/CD often called DevOps. To put most of the team effort into creating the actual application and its business logic, they have chosen a cloud-native environment for running the application to minimize the effort needed for infrastructure setup. The application is a single-page application with relational database as a data storage. It is coded with Python.
 
CI/CD, shortly CI, pipeline includes several steps to check and validate code quality and build and deploy the code to testing, staging, or production environments. Quality validation includes for example code auto formatting, linting, and testing. For linting the team could use Flake8 ( https://pypi.org/project/flake8/). For auto-formatting Black ( https://pypi.org/project/black/) is recommended tool. The choice for testing is PyTest ( https://docs.pytest.org/en/stable/index.html), which supports both unit tests and end-to-end integration tests. [1]
 
The team considers their choices for a CI/CD tool and environment. As their strategy has been to avoid infrastructure setup, their choice is cloud-based CI/CD, too. There seems to be an enormous number of choices available e.g. CircleCI ( https://circleci.com/), Bamboo ( https://www.atlassian.com/software/bamboo), Travis ( https://travis-ci.com/), Buddy ( https://buddy.works/). In the selection process, they need to consider the overall cost of operation. Although they end up paying subscription or usage-based fees for the tool, they avoid the time and effort of setting up their own server and tedious tool configuration, which is often significantly more costly. [2] [3]

## References
- [1] https://medium.com/edge-analytics/python-best-practices-2934de825fd2 
- [2] https://katalon.com/resources-center/blog/ci-cd-tools 
- [3] https://zeet.co/blog/continuous-integration-tools#15-most-reliable-continuous-integration-tools 
