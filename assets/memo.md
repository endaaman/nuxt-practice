Linux向けに配布するならautoconfがやはり非常に便利で、とりあえずこれに乗せておけばバージョニングとかも面倒を見てくれて、使う側も何も考えずに `./configure && make && sudo make install`でインストールできるようになる。

このautoconfだが、C/C++だけでなくPythonのソフトウェアの配布にも使うことができる。

`configure.ac` で `AM_PATH_PYTHON` を指定するとPython向けになる。

`Makefile.am` には、 hoge_PYTHON に指定したものが  `${prefix}/lib/pythonX.X/site-packages/hoge/__pychache__/` 以下に、 `bin_SCRIPTS` に指定したものは `${prefix}/bin` 以下に、`make install` したときに配置されるようになる。

## 例

### configure.ac

```autoconf
AC_PREREQ([2.69])
AC_INIT(hoge, 0.0.1)
AM_INIT_AUTOMAKE([foreign])
AM_PATH_PYTHON
AC_OUTPUT([
Makefile
src/Makefile
])
```

### ./src/Makefile.am

```automake
bin_SCRIPTS = hoge
hogedir = $(pythondir)/hoge
hoge_PYTHON = hoge.py
```

### ./src/hoge.py

ここに本体の処理を書く。 `def main():` なエントリポイントの定義だけ書いておく。

```python
def main():
    # メイン処理
```

### ./src/hoge

エントリポイントからはmainの関数を実行する。`${prefix}/lib/pythonX.X/site-packages/hoge/__pychache__/` 以下に配置されるので、そこから import できるというわけであります

```python
#!/usr/bin/env python3
import sys, hoge

if __name__ == '__main__':
    sys.exit(hoge.main())
```

こんな感じでどうでしょう
