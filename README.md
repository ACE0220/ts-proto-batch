# 批量转换proto file至typescript file

## 安装

```sh
npm install @tecace/ts-proto-batch -g
```

## 使用

```sh
ts-pb gen -i protos -o dist
```

## 选项

- -i,--input proto文件的存放文件夹目录
- -o,--output 生成ts文件的文件夹目录

## 注意

- -i 选项仅支持文件夹读取，封装的初衷是为了批量递归生成typescript file
- -i和-o的文件夹的路径中，基础的部分都是process.cwd()
  - 假定process.cwd()返回/User/home/ace
  - -i protos 最终会拼接成/User/home/ace/protos
  - -o dist 最终会拼接成/User/home/ace/dist