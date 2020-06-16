export const GLOBAL = {
  /**
   * 自定义事件
   */
  events: {
    push: 'push:page',
    user: {
      login: {
        error: 'user:login:error',
        success: 'user:login:success'
      },
      logout: {
        error: 'user:logout:error',
        success: 'user:logout:success'
      }
    }
  },
  status: {
    //1启用 0禁用 删除 2拉黑
    unable: 0,
    enable: 1,
    defriend: 2
  }
};
export const DICT = {
  dispatchState: [
    {
      label: '停用',
      value: GLOBAL.status.unable
    },
    {
      label: '启用',
      value: GLOBAL.status.enable
    }
  ],
  yesNo: [
    {
      label: '否',
      value: GLOBAL.status.unable
    },
    {
      label: '是',
      value: GLOBAL.status.enable
    }
  ],
  languageType: [
    {
      value: 'CN',
      label: '简体中文'
    },
    {
      value: 'EN',
      label: 'English'
    },
    {
      value: 'TW',
      label: '繁體臺語'
    }
  ],
  status: [
    {
      label: '禁用',
      value: GLOBAL.status.unable
    },
    {
      label: '启用',
      value: GLOBAL.status.enable
    }
  ],
  dateTime: [
    {
      label: '日',
      value: 1
    },
    {
      label: '月',
      value: 2
    }
  ],
  startDateTime: [
    {
      label: '一月',
      value: 1
    },
    {
      label: '二月',
      value: 2
    },
    {
      label: '三月',
      value: 3
    },
    {
      label: '四月',
      value: 4
    },
    {
      label: '五月',
      value: 5
    },
    {
      label: '六月',
      value: 6
    },
    {
      label: '七月',
      value: 7
    },
    {
      label: '八月',
      value: 8
    },
    {
      label: '九月',
      value: 9
    },
    {
      label: '十月',
      value: 10
    },
    {
      label: '十一月',
      value: 11
    },
    {
      label: '十二月',
      value: 12
    }
  ]
};
