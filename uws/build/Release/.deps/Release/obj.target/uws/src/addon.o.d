cmd_Release/obj.target/uws/src/addon.o := g++ '-DNODE_GYP_MODULE_NAME=uws' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DBUILDING_NODE_EXTENSION' -I/home/myml/.node-gyp/9.11.0/include/node -I/home/myml/.node-gyp/9.11.0/src -I/home/myml/.node-gyp/9.11.0/deps/uv/include -I/home/myml/.node-gyp/9.11.0/deps/v8/include  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -O3 -std=c++11 -DUSE_LIBUV -MMD -MF ./Release/.deps/Release/obj.target/uws/src/addon.o.d.raw   -c -o Release/obj.target/uws/src/addon.o ../src/addon.cpp
Release/obj.target/uws/src/addon.o: ../src/addon.cpp ../src/../src/uWS.h \
 ../src/../src/Hub.h ../src/../src/Group.h ../src/../src/WebSocket.h \
 ../src/../src/WebSocketProtocol.h ../src/../src/Networking.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/opensslv.h \
 ../src/../src/Backend.h ../src/../src/Libuv.h \
 /home/myml/.node-gyp/9.11.0/include/node/uv.h \
 /home/myml/.node-gyp/9.11.0/include/node/uv-errno.h \
 /home/myml/.node-gyp/9.11.0/include/node/uv-version.h \
 /home/myml/.node-gyp/9.11.0/include/node/uv-unix.h \
 /home/myml/.node-gyp/9.11.0/include/node/uv-threadpool.h \
 /home/myml/.node-gyp/9.11.0/include/node/uv-linux.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/ssl.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/e_os2.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/opensslconf.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/./archs/linux-x86_64/opensslconf.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/comp.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/crypto.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/stack.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/safestack.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/ossl_typ.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/symhacks.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/bio.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/x509.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/buffer.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/evp.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/objects.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/obj_mac.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/asn1.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/bn.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/ec.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/ecdsa.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/ecdh.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/rsa.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/dsa.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/dh.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/sha.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/x509_vfy.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/lhash.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/pkcs7.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/pem.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/pem2.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/hmac.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/kssl.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/ssl2.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/ssl3.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/tls1.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/dtls1.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/pqueue.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/ssl23.h \
 /home/myml/.node-gyp/9.11.0/include/node/openssl/srtp.h \
 ../src/../src/Socket.h ../src/../src/HTTPSocket.h \
 ../src/../src/Extensions.h ../src/../src/Node.h \
 /home/myml/.node-gyp/9.11.0/include/node/zlib.h \
 /home/myml/.node-gyp/9.11.0/include/node/zconf.h ../src/addon.h \
 /home/myml/.node-gyp/9.11.0/include/node/node.h \
 /home/myml/.node-gyp/9.11.0/include/node/v8.h \
 /home/myml/.node-gyp/9.11.0/include/node/v8-version.h \
 /home/myml/.node-gyp/9.11.0/include/node/v8config.h \
 /home/myml/.node-gyp/9.11.0/include/node/v8-platform.h \
 /home/myml/.node-gyp/9.11.0/include/node/node_version.h \
 /home/myml/.node-gyp/9.11.0/include/node/node_buffer.h \
 /home/myml/.node-gyp/9.11.0/include/node/node.h ../src/http.h
../src/addon.cpp:
../src/../src/uWS.h:
../src/../src/Hub.h:
../src/../src/Group.h:
../src/../src/WebSocket.h:
../src/../src/WebSocketProtocol.h:
../src/../src/Networking.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/opensslv.h:
../src/../src/Backend.h:
../src/../src/Libuv.h:
/home/myml/.node-gyp/9.11.0/include/node/uv.h:
/home/myml/.node-gyp/9.11.0/include/node/uv-errno.h:
/home/myml/.node-gyp/9.11.0/include/node/uv-version.h:
/home/myml/.node-gyp/9.11.0/include/node/uv-unix.h:
/home/myml/.node-gyp/9.11.0/include/node/uv-threadpool.h:
/home/myml/.node-gyp/9.11.0/include/node/uv-linux.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/ssl.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/e_os2.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/opensslconf.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/./archs/linux-x86_64/opensslconf.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/comp.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/crypto.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/stack.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/safestack.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/ossl_typ.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/symhacks.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/bio.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/x509.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/buffer.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/evp.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/objects.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/obj_mac.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/asn1.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/bn.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/ec.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/ecdsa.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/ecdh.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/rsa.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/dsa.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/dh.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/sha.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/x509_vfy.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/lhash.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/pkcs7.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/pem.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/pem2.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/hmac.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/kssl.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/ssl2.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/ssl3.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/tls1.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/dtls1.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/pqueue.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/ssl23.h:
/home/myml/.node-gyp/9.11.0/include/node/openssl/srtp.h:
../src/../src/Socket.h:
../src/../src/HTTPSocket.h:
../src/../src/Extensions.h:
../src/../src/Node.h:
/home/myml/.node-gyp/9.11.0/include/node/zlib.h:
/home/myml/.node-gyp/9.11.0/include/node/zconf.h:
../src/addon.h:
/home/myml/.node-gyp/9.11.0/include/node/node.h:
/home/myml/.node-gyp/9.11.0/include/node/v8.h:
/home/myml/.node-gyp/9.11.0/include/node/v8-version.h:
/home/myml/.node-gyp/9.11.0/include/node/v8config.h:
/home/myml/.node-gyp/9.11.0/include/node/v8-platform.h:
/home/myml/.node-gyp/9.11.0/include/node/node_version.h:
/home/myml/.node-gyp/9.11.0/include/node/node_buffer.h:
/home/myml/.node-gyp/9.11.0/include/node/node.h:
../src/http.h:
