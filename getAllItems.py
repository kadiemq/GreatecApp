import sqlite3

from flask import jsonify


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


def getAllItems():
    conn = sqlite3.connect('items.db')
    conn.row_factory = dict_factory

    c = conn.cursor()
    c.execute('select * from items')

    items = c.fetchall()
    conn.commit()

    conn.close()

    return jsonify(items)
