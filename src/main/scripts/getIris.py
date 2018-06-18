from sklearn import datasets
from sklearn import svm
import sys

if len(sys.argv) != 5:
    print("Invalid number of arguments")
    sys.stdout.flush()
else:
    clf = svm.SVC()
    iris = datasets.load_iris()
    X, y = iris.data, iris.target
    clf.fit(X, y)

    sepalLength = sys.argv[1]
    sepalWidth = sys.argv[2]
    petalLength = sys.argv[3]
    petalWidth = sys.argv[4]
    print(clf.predict([[sepalLength, sepalWidth, petalLength, petalWidth]]))
    sys.stdout.flush()
