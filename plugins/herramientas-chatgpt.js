function _0x2745(_0x412c94, _0xc58a01) {
  const _0x2745de = _0xc58a();
  _0x2745 = function (_0x213f53, _0x4eb189) {
      _0x213f53 = _0x213f53 - 0x0;
      let _0x447c1a = _0x2745de[_0x213f53];
      return _0x447c1a;
  };
  return _0x2745(_0x412c94, _0xc58a01);
}
const _0x2cb637 = _0x2745;
(function (_0x12fe96, _0x37c434) {
  const _0x5bfcd1 = _0x2745;
  const _0x33c32f = _0x12fe96();
  while (!![]) {
      try {
          const _0x4f1aa8 = parseInt(_0x5bfcd1(0x22)) / 0x1 * (-parseInt(_0x5bfcd1(0x2a)) / 0x2) + -parseInt(_0x5bfcd1(0x1e)) / 0x3 + parseInt(_0x5bfcd1(0x2d)) / 0x4 * (-parseInt(_0x5bfcd1(0x24)) / 0x5) + parseInt(_0x5bfcd1(0x36)) / 0x6 * (parseInt(_0x5bfcd1(0x1b)) / 0x7) + parseInt(_0x5bfcd1(0x26)) / 0x8 * (-parseInt(_0x5bfcd1(0x2e)) / 0x9) + -parseInt(_0x5bfcd1(0x20)) / 0xa + -parseInt(_0x5bfcd1(0x21)) / 0xb * (-parseInt(_0x5bfcd1(0x19)) / 0xc);
          if (_0x4f1aa8 === _0x37c434) {
              break;
          } else {
              _0x33c32f['push'](_0x33c32f['shift']());
          }
      } catch (_0x4f9b06) {
          _0x33c32f['push'](_0x33c32f['shift']());
      }
  }
}(_0xc58a, 0xf23c8));
import _0x53def7 from 'node-fetch';
import _0x561a3c from 'axios';
import _0x307283 from '@vitalets/google-translate-api';
import {
  Configuration,
  OpenAIApi
} from 'openai';
const configuration = new Configuration({
  'organization': global[_0x2cb637(0x8)],
  'apiKey': global['openai_key']
});
const openaiii = new OpenAIApi(configuration);
const handler = async (_0x5313f4, {
  conn: _0x290ff3,
  text: _0x24524e,
  usedPrefix: _0x3e8f46,
  command: _0x3a6531
}) => {
  const _0x19f7ae = _0x2745;
  if (_0x3e8f46 == 'a' || _0x3e8f46 == 'A') return;
  if (!_0x24524e) throw '*~[🌐] مرحباً بك في قسم الذكاء الاصطناعي ادخل نص لاتستطيع الرد بكل دقة و منطقية*\x0a\x0a*• مثل*\x0a*◉ ' + (_0x3e8f46 + _0x3a6531) + ' افضل انمي*\x0a*◉ ' + (_0x3e8f46 + _0x3a6531) + ' هات نصائح*';
  await _0x290ff3[_0x19f7ae(0xe)](_0x5313f4[_0x19f7ae(0x1f)], {
      'react': {
          'text': _0x19f7ae(0x17),
          'key': _0x5313f4[_0x19f7ae(0xf)]
      }
  });
  try {
      _0x290ff3[_0x19f7ae(0x27)](_0x19f7ae(0x29), _0x5313f4[_0x19f7ae(0x1f)]);
      let _0x567bd5 = _0x19f7ae(0x32);
      async function _0x3b695b(_0x3943e4) {
          const _0xa4a9b1 = _0x2745;
          const _0x1e6706 = global[_0xa4a9b1(0x34)];
          let _0xdae1f4 = global[_0xa4a9b1(0x30)]['data'][_0xa4a9b1(0xb)][_0x5313f4[_0xa4a9b1(0x13)]];
          _0xdae1f4[_0xa4a9b1(0x23)]({
              'role': _0xa4a9b1(0x12),
              'content': _0x3943e4
          });
          const _0x3d1ca7 = _0xa4a9b1(0x33);
          const _0x4eb28c = {
              'Content-Type': _0xa4a9b1(0x10),
              'Authorization': _0xa4a9b1(0xa) + _0x1e6706
          };
          const _0x37b96f = {
              'model': _0xa4a9b1(0x7),
              'messages': [{
                  'role': _0xa4a9b1(0x2),
                  'content': _0x567bd5
              }, ..._0xdae1f4]
          };
          const _0x2a2698 = await _0x53def7(_0x3d1ca7, {
              'method': _0xa4a9b1(0x37),
              'headers': _0x4eb28c,
              'body': JSON['stringify'](_0x37b96f)
          });
          const _0x17f189 = await _0x2a2698[_0xa4a9b1(0x3a)]();
          const _0x633242 = _0x17f189['choices'][0x0][_0xa4a9b1(0x5)][_0xa4a9b1(0x31)];
          return _0x633242;
      };
      let _0xf75be5 = await _0x3b695b(_0x24524e);
      if (_0xf75be5 == _0x19f7ae(0x4) || _0xf75be5 == '' || !_0xf75be5) return XD;
      _0x5313f4[_0x19f7ae(0x11)](('' + _0xf75be5)[_0x19f7ae(0x15)]());
  } catch {
      try {
          _0x290ff3[_0x19f7ae(0x27)](_0x19f7ae(0x29), _0x5313f4['chat']);
          const _0x3b96c1 = await openaiii[_0x19f7ae(0x39)]({
              'model': _0x19f7ae(0x1c),
              'prompt': _0x24524e,
              'temperature': 0.3,
              'max_tokens': 0x1001,
              'stop': [_0x19f7ae(0xd), 'Human:'],
              'top_p': 0x1,
              'frequency_penalty': 0.2,
              'presence_penalty': 0x0
          });
          if (_0x3b96c1[_0x19f7ae(0x6)]['choices'][0x0]['text'] == 'error' || _0x3b96c1[_0x19f7ae(0x6)][_0x19f7ae(0x1a)][0x0][_0x19f7ae(0x38)] == '' || !_0x3b96c1[_0x19f7ae(0x6)][_0x19f7ae(0x1a)][0x0][_0x19f7ae(0x38)]) return XD;
          _0x5313f4[_0x19f7ae(0x11)](_0x3b96c1[_0x19f7ae(0x6)][_0x19f7ae(0x1a)][0x0][_0x19f7ae(0x38)]['trim']());
      } catch {
          try {
              _0x290ff3[_0x19f7ae(0x27)](_0x19f7ae(0x29), _0x5313f4[_0x19f7ae(0x1f)]);
              const _0x4743f8 = _0x19f7ae(0x3);
              const _0x503645 = await _0x53def7(_0x19f7ae(0x0) + _0x24524e + _0x19f7ae(0x35) + _0x4743f8 + _0x19f7ae(0x2b));
              const _0x265963 = await _0x503645[_0x19f7ae(0x3a)]();
              if (_0x265963['result'] == 'error' || _0x265963[_0x19f7ae(0x18)] == '' || !_0x265963['result']) return XD;
              _0x5313f4[_0x19f7ae(0x11)](('' + _0x265963[_0x19f7ae(0x18)])[_0x19f7ae(0x15)]());
          } catch {
              try {
                  _0x290ff3[_0x19f7ae(0x27)]('composing', _0x5313f4[_0x19f7ae(0x1f)]);
                  const _0xf6af76 = await _0x53def7(_0x19f7ae(0x28) + _0x24524e);
                  const _0x4fb629 = await _0xf6af76[_0x19f7ae(0x3a)]();
                  if (_0x4fb629[_0x19f7ae(0x6)] == _0x19f7ae(0x4) || _0x4fb629['data'] == '' || !_0x4fb629[_0x19f7ae(0x6)]) return XD;
                  _0x5313f4[_0x19f7ae(0x11)](('' + _0x4fb629[_0x19f7ae(0x6)])[_0x19f7ae(0x15)]());
              } catch {
                  try {
                      _0x290ff3[_0x19f7ae(0x27)](_0x19f7ae(0x29), _0x5313f4[_0x19f7ae(0x1f)]);
                      const _0x4f1444 = await _0x53def7(_0x19f7ae(0x1d) + _0x24524e);
                      const _0x539115 = await _0x4f1444[_0x19f7ae(0x3a)]();
                      if (_0x539115['data'] == _0x19f7ae(0x4) || _0x539115[_0x19f7ae(0x6)] == '' || !_0x539115['data']) return XD;
                      _0x5313f4['reply'](('' + _0x539115[_0x19f7ae(0x6)])[_0x19f7ae(0x15)]());
                  } catch {
                      try {
                          _0x290ff3['sendPresenceUpdate']('composing', _0x5313f4[_0x19f7ae(0x1f)]);
                          const _0x1b4cb3 = await _0x53def7(_0x19f7ae(0x14) + _0x24524e);
                          const _0x24288c = await _0x1b4cb3[_0x19f7ae(0x3a)]();
                          if (_0x24288c[_0x19f7ae(0x6)] == _0x19f7ae(0x4) || _0x24288c[_0x19f7ae(0x6)] == '' || !_0x24288c[_0x19f7ae(0x6)]) return XD;
                          _0x5313f4[_0x19f7ae(0x11)](('' + _0x24288c[_0x19f7ae(0x6)])['trim']());
                      } catch {
                          try {
                              _0x290ff3[_0x19f7ae(0x27)](_0x19f7ae(0x29), _0x5313f4[_0x19f7ae(0x1f)]);
                              const _0x4b05ee = await _0x53def7(_0x19f7ae(0x25) + lolkeysapi + '&text=' + _0x24524e + _0x19f7ae(0x9) + _0x5313f4[_0x19f7ae(0x13)]);
                              const _0x20e8d7 = await _0x4b05ee[_0x19f7ae(0x3a)]();
                              if (_0x20e8d7[_0x19f7ae(0x18)] == 'error' || _0x20e8d7[_0x19f7ae(0x18)] == '' || !_0x20e8d7[_0x19f7ae(0x18)]) return XD;
                              const _0x48b38a = await _0x307283('' + _0x20e8d7[_0x19f7ae(0x18)], {
                                  'to': 'ar',
                                  'autoCorrect': !![]
                              });
                              _0x5313f4[_0x19f7ae(0x11)](('' + _0x48b38a['text'])[_0x19f7ae(0x15)]());
                          } catch {
                              try {
                                  _0x290ff3['sendPresenceUpdate'](_0x19f7ae(0x29), _0x5313f4[_0x19f7ae(0x1f)]);
                                  const _0x29b10b = _0x19f7ae(0x2c);
                                  const _0x588425 = _0x19f7ae(0xc);
                                  const _0x3687e3 = await _0x53def7(_0x19f7ae(0x2f));
                                  const _0x49942d = await _0x3687e3['json']();
                                  const _0x45d8ae = await _0x307283('' + _0x49942d[_0x19f7ae(0x6)], {
                                      'to': 'ar',
                                      'autoCorrect': !![]
                                  });
                                  const _0xebd2ae = _0x45d8ae[_0x19f7ae(0x38)];
                                  const _0x174baa = _0xebd2ae[_0x19f7ae(0x3b)](_0x29b10b, _0x588425)['trim']();
                                  _0x5313f4[_0x19f7ae(0x11)](_0x174baa);
                              } catch {
                                  try {
                                      _0x290ff3[_0x19f7ae(0x27)](_0x19f7ae(0x29), _0x5313f4[_0x19f7ae(0x1f)]);
                                      const _0x9a6256 = await _0x53def7('https://api.akuari.my.id/ai/gpt?chat=' + _0x24524e);
                                      const _0x58d514 = await _0x9a6256[_0x19f7ae(0x3a)]();
                                      if (_0x58d514[_0x19f7ae(0x16)] == 'error' || _0x58d514[_0x19f7ae(0x16)] == '' || !_0x58d514[_0x19f7ae(0x16)]) return XD;
                                      const _0x2a6aea = await _0x307283('' + _0x58d514[_0x19f7ae(0x16)], {
                                          'to': 'ar',
                                          'autoCorrect': !![]
                                      });
                                      _0x5313f4[_0x19f7ae(0x11)](_0x2a6aea[_0x19f7ae(0x38)][_0x19f7ae(0x15)]());
                                  } catch {
                                      try {
                                          _0x290ff3[_0x19f7ae(0x27)](_0x19f7ae(0x29), _0x5313f4['chat']);
                                          const _0x286169 = await _0x53def7('https://api.akuari.my.id/ai/gbard?chat=' + _0x24524e);
                                          const _0x307fd0 = await _0x286169['json']();
                                          if (_0x307fd0[_0x19f7ae(0x16)] == 'error' || _0x307fd0[_0x19f7ae(0x16)] == '' || !_0x307fd0[_0x19f7ae(0x16)]) return XD;
                                          const _0x1fd908 = await _0x307283('' + _0x307fd0['respon'], {
                                              'to': 'ar',
                                              'autoCorrect': !![]
                                          });
                                          _0x5313f4[_0x19f7ae(0x11)](('' + _0x1fd908['text'])['trim']());
                                      } catch {
                                          throw _0x19f7ae(0x1);
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
  }
};

function _0xc58a() {
  const _0x3f402c = ['result', '4260zwluAt', 'choices', '35gvPuxf', 'text-davinci-003', 'https://vihangayt.me/tools/chatgpt2?q=', '1098009hjDwqK', 'chat', '14502550HJSOsK', '214929VBpnip', '1304291RqInIO', 'push', '8448085yAblMA', 'https://api.lolhuman.xyz/api/openai?apikey=', '215536ZxAWWC', 'sendPresenceUpdate', 'https://vihangayt.me/tools/chatgpt?q=', 'composing', '2gfsQtl', '&apikey=XlwAnX8d', ' Indonesia ', '4NChLev', '423JJmnLc', 'https://api.ibeng.tech/api/others/chatgpt?q=Hola&apikey=eMlBNRzUXv', 'chatgpt', 'content', 'تم صنع الملف بواسطه ڤينوم و سوكونا.', 'https://api.openai.com/v1/chat/completions', 'openai_key', '&symsg=', '158754XMtvtV', 'POST', 'text', 'createCompletion', 'json', 'replace', 'https://api-fgmods.ddns.net/api/info/openai?text=', '*[❗] حصل خطأ*', 'system', 'صنع الملف بواسطه ڤينوم و سوكونا.', 'error', 'message', 'data', 'gpt-3.5-turbo', 'openai_org_id', '&usar=', 'Bearer ', 'users', ' español ', 'Ai:', 'sendMessage', 'key', 'application/json', 'reply', 'user', 'sender', 'https://vihangayt.me/tools/chatgpt3?q=', 'trim', 'respon', '🗣️'];
  _0xc58a = function () {
      return _0x3f402c;
  };
  return _0xc58a();
}
handler['command'] = /^(openai|chatgpt|ia|robot|openai2|chatgpt2|بوت|robot2|Mystic|MysticBot)$/i;
export default handler;