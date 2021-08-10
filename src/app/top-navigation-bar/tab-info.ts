export interface TabInfo {
  title: string,
  router: string
}

export const TABS: TabInfo[] = [
  {title: "兑换", router: "/swap"},
  {title: "流动池", router: "/liquidity"},
  {title: "投票", router: "/vote"},
  {title: "图表", router: "/chart"},
]
