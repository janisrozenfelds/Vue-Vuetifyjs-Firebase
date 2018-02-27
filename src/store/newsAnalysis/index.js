export default {
  state: {
    loadNewsAnalysis: [
      {
        companyName: 'Samsung',
        totalScore: '2',
        tickerName: 'KRX',
        tickerCode: '005930',
        Industry: 'Hardware & IT Equipment 1',
        id: 'company-id-1'
      },
      {
        companyName: 'LG',
        totalScore: '2',
        tickerName: 'KRY2',
        TickerCode: '005930',
        Industry: 'Hardware & IT Equipment 2',
        id: 'company-id-2'
      },
      {
        companyName: 'Hyundai: but what happens when we get very very very long text',
        totalScore: '3',
        tickerName: 'KRT',
        TickerCode: '005930',
        Industry: 'Hardware & IT Equipment 3',
        id: '134513451345-id-3'
      },
      {
        companyName: 'BNK',
        totalScore: '5',
        tickerName: 'KRI',
        TickerCode: '005930',
        Industry: 'Hardware & IT Equipment 4',
        id: '32453145125-id-4'
      },
      {
        companyName: 'Financial',
        totalScore: '2.7',
        tickerName: 'KRI',
        TickerCode: '005930',
        Industry: 'Hardware & IT Equipment',
        id: '1268461298634-id-5'
      },
      {
        companyName: 'BNK Financial Group',
        totalScore: '1.2',
        tickerName: 'KRI',
        TickerCode: '005930',
        Industry: 'Hardware & IT Equipment 5',
        id: '134531451324514-id-6'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    loadNewsAnalysis (state) {
      return state.loadNewsAnalysis
    },
    loadCompanyId (state) {
      return (companyId) => {
        return state.loadNewsAnalysis.find((company) => {
          return company.id === companyId
        })
      }
    }
  }
}
