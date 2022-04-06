#!/bin/bash
set -e

# 既存のserver.pidがあれば削除
rm -f /myapp/tmp/pids/server.pid

# Dockerfileのコマンドを持ってくる
exec "$@"
