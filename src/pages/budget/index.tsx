import { Tabs } from "antd"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import BudgetControl from "../../components/ui/budget/budgetControl"
import CurrencyAndTaxes from "../../components/ui/budget/currency"
import { useGlobalStoreHook } from "../../hooks"

const items = [
  {
    key: "0",
    label: "Currency and taxes",
    path: "currency-taxes",
    children: <CurrencyAndTaxes />,
  },
  {
    key: "1",
    label: "Budget line",
    path: "budget-line",
    children: <div className="pr-10 pl-5">Content of Tab Pane 2</div>,
  },
  {
    key: "2",
    label: "Budget room center",
    path: "budget-room",
    children: <CurrencyAndTaxes />,
  },

  {
    key: "3",
    label: "Budget control",
    path: "budget-control",
    children: <BudgetControl />,
  },
]
const Budget = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeKey, setActiveKey] = useState("")
  const { scrollToTop } = useGlobalStoreHook()

  const onChange = (e: string) => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.set("type", e)
    navigate(`?${searchParams.toString()}`)
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const source = queryParams.get("type")
    const element = items?.find((element) => element?.path === source)
    setActiveKey(element?.path || items[0]?.path)
  }, [location.search])

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <div className="overflow-y-scroll h-[87vh] pb-20">
      <Tabs
        activeKey={activeKey}
        onChange={onChange}
        size="small"
        tabBarStyle={{
          color: "#98A5B1",
        }}
      >
        {items.map((element) => {
          return (
            <Tabs.TabPane tab={element.label} key={element.path}>
              {element.children}
            </Tabs.TabPane>
          )
        })}
      </Tabs>
    </div>
  )
}

export default Budget
