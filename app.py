from flask import Flask, render_template

from getAllItems import getAllItems

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/getallitems')
def get_all_items():
    return getAllItems()


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
