(() =>
  fetch('http://localhost:8001/download/mp4', {
    headers: {
      Accept: 'application/zip',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify([
      'https://www.youtube.com/watch?v=rKcWT1LIH3M',
      'https://www.youtube.com/watch?v=2tDTUpdS_P4',
      'https://www.youtube.com/watch?v=M76qUQTt_Sw',
      'https://www.youtube.com/watch?v=1ppPuobqt-g',
      'https://www.youtube.com/watch?v=fGv3w_Kt1Zo',
      'https://www.youtube.com/watch?v=9FK_uA_cBX4',
      'https://www.youtube.com/watch?v=6PRQ_abgg9Q',
      'https://www.youtube.com/watch?v=smCv_4q5I84',
      'https://www.youtube.com/watch?v=OQ59_5ejr24',
      'https://www.youtube.com/watch?v=BrGPu0E20Zo',
      'https://www.youtube.com/watch?v=6EtVE1C4bG4',
      'https://www.youtube.com/watch?v=qjD3r5R9ISo',
      'https://www.youtube.com/watch?v=hIWhQwht1a8',
      'https://www.youtube.com/watch?v=LoYYtYjB3h4',
      'https://www.youtube.com/watch?v=5OeR5XBEahU',
      'https://www.youtube.com/watch?v=ft4jcPSLJfY',
      'https://www.youtube.com/watch?v=ixkoVwKQaJg',
      'https://www.youtube.com/watch?v=m7Bc3pLyij0',
      'https://www.youtube.com/watch?v=bo_efYhYU2A',
      'https://www.youtube.com/watch?v=A9hcJgtnm6Q',
      'https://www.youtube.com/watch?v=fLexgOxsZu0',
      'https://www.youtube.com/watch?v=pRpeEdMmmQ0',
      'https://www.youtube.com/watch?v=o_v9MY_FMcw',
      'https://www.youtube.com/watch?v=xo1VInw-SKc',
      'https://www.youtube.com/watch?v=eCyMh-mZ1B0',
      'https://www.youtube.com/watch?v=sS2yCCi2Mek',
      'https://www.youtube.com/watch?v=5hnSlCygsTs',
      'https://www.youtube.com/watch?v=OT7PpQEz7rc',
      'https://www.youtube.com/watch?v=2WsIm6pNlI4',
      'https://www.youtube.com/watch?v=a1w0lsZX8Lk',
      'https://www.youtube.com/watch?v=2nH7xAMqD2g',
      'https://www.youtube.com/watch?v=OQ59_5ejr24',
      'https://www.youtube.com/watch?v=czOoOSLVwRI',
      'https://www.youtube.com/watch?v=tnfbhjbbmu4',
      'https://www.youtube.com/watch?v=hdjERtU7lMk',
      'https://www.youtube.com/watch?v=ebG36xtK87A',
      'https://www.youtube.com/watch?v=KbRtA_brCQ0',
      'https://www.youtube.com/watch?v=NknSbb74lOg',
      'https://www.youtube.com/watch?v=2WsIm6pNlI4',
      'https://www.youtube.com/watch?v=gqYHksX0Z_M',
      'https://www.youtube.com/watch?v=EIV2B1A0RkY',
      'https://www.youtube.com/watch?v=bnurwH4OSJ8',
      'https://www.youtube.com/watch?v=wvln6hFsq1s',
      'https://www.youtube.com/watch?v=kp7RJyE1BfU',
      'https://www.youtube.com/watch?v=etsjaEmLSfA',
      'https://www.youtube.com/watch?v=dHcpB3DsFyM',
      'https://www.youtube.com/watch?v=1teK3Gj0jJc',
      'https://www.youtube.com/watch?v=Way9cIOUs4k',
      'https://www.youtube.com/watch?v=UudUvcOZyMw',
      'https://www.youtube.com/watch?v=NN3_g4T3Kok',
      'https://www.youtube.com/watch?v=ivlDh1YEi6U',
      'https://www.youtube.com/watch?v=OWSDq4_8NiA',
      'https://www.youtube.com/watch?v=K6ScoGai3A0',
      'https://www.youtube.com/watch?v=WKTzT93W6BA',
      'https://www.youtube.com/watch?v=IvPWEdnpWHU',
      'https://www.youtube.com/watch?v=Kcfjhr3rIGg',
      'https://www.youtube.com/watch?v=-IYIVmoEXa8',
      'https://www.youtube.com/watch?v=f9C9aBUQVOg',
      'https://www.youtube.com/watch?v=3MRej_lv4ks'
    ])
  }).then(res => console.log('done')))();
