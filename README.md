# Skeleton Admin

A shot at a minimalist Admin template, requiring as little manual styling as possible.


## Dev

Install:

    npm install

Export node modules bin:

    export PATH=$(pwd)/node_modules/.bin:$PATH

Compile stylus:

    stylus -o dist/admin.css -m src/stylus/index.styl

Serve test files:

    python -m SimpleHTTPServer

Access <http://localhost:8000/src/pages/table.html>.