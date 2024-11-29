var APP_DATA = {
  "scenes": [
    {
      "id": "0-estar",
      "name": "ESTAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.0297442586766543,
        "pitch": 0.06658524295187007,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.7920557383964386,
          "pitch": 0.09059289491072064,
          "rotation": 0,
          "target": "1-cozinha"
        },
        {
          "yaw": -1.148438868892507,
          "pitch": 0.036641528092587805,
          "rotation": 0,
          "target": "2-circulao"
        },
        {
          "yaw": 0.28308346706807264,
          "pitch": 0.04900126262432458,
          "rotation": 0,
          "target": "3-lavabo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cozinha",
      "name": "COZINHA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.53833600043356,
          "pitch": 0.0341616834433367,
          "rotation": 0,
          "target": "2-circulao"
        },
        {
          "yaw": 2.418541000567533,
          "pitch": 0.15968722686622883,
          "rotation": 0,
          "target": "0-estar"
        },
        {
          "yaw": 1.5481245904138463,
          "pitch": 0.07601164298463559,
          "rotation": 0,
          "target": "3-lavabo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-circulao",
      "name": "CIRCULAÇÃO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6614810461973812,
          "pitch": -0.07554418460388135,
          "rotation": 0,
          "target": "1-cozinha"
        },
        {
          "yaw": 1.8188747234537672,
          "pitch": -0.0580100445060161,
          "rotation": 0,
          "target": "4-office"
        },
        {
          "yaw": 2.012524651355334,
          "pitch": -0.06541625132261686,
          "rotation": 0,
          "target": "5-banho-kids"
        },
        {
          "yaw": 2.8410624037409624,
          "pitch": -0.15729181699647654,
          "rotation": 0,
          "target": "6-quarto-kids"
        },
        {
          "yaw": -1.5436704106690886,
          "pitch": -0.07605809409082198,
          "rotation": 0,
          "target": "8-sute"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lavabo",
      "name": "LAVABO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.5213701602414673,
        "pitch": 0.04023246689976645,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.8374096454190294,
          "pitch": 0.4194720687991236,
          "rotation": 0,
          "target": "0-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-office",
      "name": "OFFICE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5804816097513044,
          "pitch": -0.07051002480849888,
          "rotation": 0,
          "target": "2-circulao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-banho-kids",
      "name": "BANHO KIDS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.058367042497748045,
          "pitch": 0.12111994601718479,
          "rotation": 0,
          "target": "2-circulao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-quarto-kids",
      "name": "QUARTO KIDS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.13551275633141735,
          "pitch": 0.07550807707744767,
          "rotation": 0,
          "target": "2-circulao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-banho-sute",
      "name": "BANHO SUÍTE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9866965214177785,
          "pitch": 0.19490026500455926,
          "rotation": 0,
          "target": "8-sute"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sute",
      "name": "SUÍTE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0693770269746228,
          "pitch": 0.046867453278482074,
          "rotation": 0,
          "target": "2-circulao"
        },
        {
          "yaw": 0.7693846195531329,
          "pitch": 0.052305275447821487,
          "rotation": 0,
          "target": "7-banho-sute"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "LEK - EP V01",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
