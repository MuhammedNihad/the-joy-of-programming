var LIVECODE_OPTIONS = {"base_url": "https://livecode.fossunited.org", "runtime": "python", "files": [{"filename": "start.py", "contents": "\"\"\"\nstart.py\n~~~~~~~~\n\nThis script is the main entry point. This will be\nexecuted whenever the run button is pressed, after\nsaving the code in the editor as main.py.\n\nThis executes the main.py after adding all the variables\nand functions defined in the sketch.py to the executing\nenvironment.\n\"\"\"\n\nimport sketch\n\n# Execute the code in main.py with all the functions\n# defined in sketch.py predefined\ncode = open(\"main.py\").read()\nenv = dict(sketch.__dict__)\nexec(code, env)"}, {"filename": "sketch.py", "contents": "import json\nfrom time import sleep\n\ndef sendmsg(msgtype, function, args):\n  \"\"\"Sends a message to the frontend.\n\n  The frontend will receive the specified message whenever\n  this function is called. The frontend can decide to some\n  action on each of these messages.\n  \"\"\"\n  msg = dict(msgtype=msgtype, function=function, args=args)\n  print(\"--MSG--\", json.dumps(msg))\n\ndef _draw(func, **kwargs):\n  sendmsg(msgtype=\"draw\", function=func, args=kwargs)\n\ndef circle(x, y, d):\n    \"\"\"Draws a circle of diameter d with center (x, y).\n    \"\"\"\n    _draw(\"circle\", x=x, y=y, d=d)\n\ndef line(x1, y1, x2, y2):\n    \"\"\"Draws a line from point (x1, y1) to point (x2, y2).\n    \"\"\"\n    _draw(\"line\", x1=x1, y1=y1, x2=x2, y2=y2)\n\ndef rect(x, y, w, h):\n    \"\"\"Draws a rectangle on the canvas.\n\n    Parameters\n    ----------\n    x: x coordinate of the top-left corner of the rectangle\n    y: y coordinate of the top-left corner of the rectangle\n    w: width of the rectangle\n    h: height of the rectangle\n    \"\"\"\n    _draw(\"rect\", x=x, y=y, w=w, h=h)\n\ndef clear():\n    _draw(\"clear\")\n\n# clear the canvas on start\nclear()"}], "command": ["python", "start.py"]};