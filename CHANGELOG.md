# 2018-04-18
by [chundong.yang](mailto:chundong.yang@ericsson.com)

## Fix
  - Add current timestrap behind 'marshall' as the value of licenseNo, because the value of licenseNo is uniqueness

# 2018-04-12
by [chundong.yang](mailto:chundong.yang@ericsson.com)

## Features
  - Add role item in addDriver dialog
  - Add role column in table on page manage drivers

## Language [en](src/app/utils/lang/en/driver.js)
- Add lang key
  - 'driver.alert.column.marshall':'Marshall'

## Language [en](src/app/utils/lang/en/addDriver.js)
- Add lang key
  - 'addDriver.label.role': 'Role'
  - 'addDriver.label.driver': 'Driver'
  - 'addDriver.label.marshall': 'Marshall'

## Language [zh_CN](src/app/utils/lang/zh/driver.js)
- Add lang key
  - 'driver.alert.column.marshall':'售票员'

## Language [zh_CN](src/app/utils/lang/zh/addDriver.js)
- Add lang key
  - 'addDriver.label.role': '角色'
  - 'addDriver.label.driver': '驾驶员'
  - 'addDriver.label.marshall': '售票员'

# 2018-04-04
by [chundong.yang](mailto:chundong.yang@ericsson.com)

## Features
  - Add variable isStar8 in config

## Language [en](src/app/utils/lang/en/driver.js)
- Add lang key
  - 'driver.header.staff': 'Manage Staff'
  - 'driver.button.addStaff':'Add Staff'
  - 'driver.alert.column.staffs':'Staffs'
  - 'driver.alert.column.activeStaffs':'Active staffs'
  - 'driver.alert.column.staff':'Staff'
  - 'driver.table.staff': 'Staff'
  - 'driver.table.column.role':'Role'
  - 'driver.addStaff.subtitle':'Add staff'
  - 'driver.addStaff.update.subtitle':'Update staff'

## Language [en](src/app/utils/lang/en/menu.js)
  - 'nav.menu.Drivers':'Drivers' => 'nav.menu.Drivers': isStar8 ? 'Staff' : 'Drivers'

## Language [zh_CN](src/app/utils/lang/zh/driver.js)
- Add lang key
  - 'driver.header.staff': '工作人员管理'
  - 'driver.button.addStaff':'新增工作人员'
  - 'driver.alert.column.staffs':'工作人员'
  - 'driver.alert.column.activeStaffs':'可工作的工作人员'
  - 'driver.alert.column.staff':'工作人员'
  - 'driver.table.staff': '工作人员'
  - 'driver.addStaff.subtitle':'新增工作人员'
  - 'driver.addStaff.update.subtitle':'更新工作人员'

## Language [en](src/app/utils/lang/en/menu.js)
  - 'nav.menu.Drivers':'驾驶员' => 'nav.menu.Drivers': isStar8 ? '工作人员' : '驾驶员'

# 2018-02-26
by [leo.shuang](mailto:leo.shuang@ericsson.com)
- fix login route by using login2 component
- fix landing route `/` by routing to login2

# 2018-02-23
by [leo.shuang](mailto:leo.shuang@ericsson.com)

- fix vehicle filter
  - Enter key with 2 condition
  - Display logic (do not display in tab overview, and page switch to display in tab list)

# 2018-02-08
by [leo.shuang](mailto:leo.shuang@ericsson.com)

## Language en
- [vehicle.js](/src/app/utils/lang/en/vehicle.js)
  - 'vehicle.filter.hint': 'You could filter by: Enterprise, VIN, License plate, Vehicle type'

## Language zh
- [vehicle.js](/src/app/utils/lang/zh/vehicle.js)
  - 'vehicle.filter.hint':'你可以过滤：企业、车辆识别号、车牌号、车辆类型'

## Features
- Add filter in page vehicles (only under tab list and just filter vehicles table widget)
- Modified [FilterMenuBar Component](/src/app/components/filterMenuBar.jsx), it is used in page vehicles and page alarms
  - Add handler if item selected in dropdown (immediately filter, do not need press `Enter` key)
  - Display dropdown when menu selected (immediately display, do not need letter input)

## Fix
- Modified [TableGrid Component](/src/app/components/table-grid.jsx)
  - Add logic for data from backend, because sometimes got error and page blocked. (it is caused by data like `list: null`)
  
# 2018-02-05
by [leo.shuang](mailto:leo.shuang@ericsson.com)

## Language en
- [alarms.js](/src/app/utils/lang/en/alarms.js)
  - type => Type (#16)
  - subType => Subtype (#17)

# 2018-01-30
by [leo.shuang](mailto:leo.shuang@ericsson.com)

## Language zh_CN
- [menu.js](/src/app/utils/lang/zh/menu.js)
  - 爱好 => 收藏夹 (#2)
  - 警报 => 告警 (#13)
  - 报警设置 => 告警设置 (#14)
  
- [sysParams.js](/src/app/utils/lang/zh/sysParams.js)
  - 无效的燃油类型 => 柴油 (#8)
  - 活动 => 可用 (#43)
  - 非活动 => 不可用 (#42)

- [vehicle.js](/src/app/utils/lang/zh/vehicle.js)
  - 齿轮箱 => 变速箱类型 (#4)
  - 类型 => 车辆分类 (#6)
  - 年 => 出厂年份 (#15)
  - 活动 => 可用车辆 (#34)
  - 警报 => 告警 (#35, #49)
  - 在车间 => 保养中的车辆 (#36)
  - 本周驾驶员 => 本周最佳驾驶员 (#40)
  - 本周的燃油消耗(L/100km) => 本周燃油消耗（升/100公里）(#46)
  - 车牌 => 车牌号 (#51)

- [fleet.js](/src/app/utils/lang/zh/fleet.js)
  - 警报 => 告警 (#19)
  - 执照 => 车牌号 (#23)
  - 没有数据 => 无相关数据 (#28)
  - 牌照 => 车牌号 (#29)
  - 车队名称 => 车队名 (#47)
  - 管理员 => 车队管理员 (#48)
  - 车辆 => 管理该车队的车辆 (#49)
  - 这周的油耗 (L/100km) => 本周燃油消耗（升/100公里） (#49)
  
- [overviewList.js](/src/app/utils/lang/zh/overviewList.js)
  - 概述 => 概览 (#3)

- [ecoScore.js](/src/app/utils/lang/zh/ecoScore.js)
  - 这周的平均eco分数 => 本周平均生态分数 (#2)
  - 本周驾驶员 => 本周最佳驾驶员 (#3)

- [alert.js](/src/app/utils/lang/zh/alert.js)
  - 警报 => 告警 (#2)
  - <mark>许可证 => 车牌号 (#5)</mark>
  - <mark>没数据 => 无相关数据 (#8)</mark>
  
- [ownerAndOperator_ch.js](/src/app/utils/lang/zh/ownerAndOperator_ch.js)
  - 警报 => 告警 (#15, #38)
  - 邮件 => 邮箱 (#46)
  - 公司 => 企业 (#17, #30, #47)

- [addDriver.js](/src/app/utils/lang/zh/addDriver.js)
  - 必输项 => 必填项 (#4)
  - 许可证号 => 驾驶证号 (#11)
  - 证件类型 => 准驾车型 (#12)

- [driver.js](/src/app/utils/lang/zh/driver.js)
  - 有效驾驶员数 => 可工作的驾驶员 (#7)
  - 警告 => 告警 (#8)
  - 本周油耗 (L/100km) => 本周燃油消耗（升/100公里） (#7)
  - 时间 => 事件 (#11)
  - 名称 => 名字 (#16)

- [report.js](/src/app/utils/lang/zh/report.js)
  - 司机 => 驾驶员 (#6, #20, #21)
  - 提示：选择模板并编辑模板生成自定义报表 => 提示：编辑报表模板，生成自定义报表 (#10)
  - 这是报表的一些描述 => 这是对报表的一些描述 (#12, #14, #16, #18)
  - 许可证号 => 车牌号 (#22)
  - 草稿 => 存为草稿 (#50)
  - 执行 => 生成 (#48)
  - 现在 => 现在生成 (#56)
  - 计划报表 => 定期生成 (#57)
  - 旅行时间 => 行程时间 (#39)
  - 燃料消耗 => 燃油消耗 (#41, #13)
  - 平均燃料消耗量 => 平均燃油消耗 (#42)
  - <mark>平均燃料消耗 => 平均燃油消耗 (#76)</mark>
  - 二氧化碳量 => CO2排放量 (#43)
  - 二氧化碳平均值 => 平均CO2排放量 (#44)
  - Acc事件 => 紧急加速事件 (#28)
  - Cor事件 => 紧急转弯事件 (#29)
  - Over-Rev事件 => 引擎转速过快事件 (#30)
  - 平均生态评分值 => 平均生态分数 (#23)
  - 制动事件 => 紧急刹车事件 (#27)
  - 持续时间 => 驾驶时间 (#32)
  - <mark>平均生态评分趋势 => 平均生态分数趋势 (#79)</mark>
  - <mark>每日燃料消耗趋势 => 每日燃油消耗趋势 (#77)</mark>
  - 个人收藏夹 => 我收藏的报表 (#83)

- [alarms.js](/src/app/utils/lang/zh/alarms.js)
  - 警报 => 告警 (#2, #3, #5)
  - 企业名 => 企业 (#9)

## Language en
- [vehicle.js](/src/app/utils/lang/en/vehicle.js)
  - Active => Active Vehicles (#35)
  - At Workshop => Vehicles at Workshop (#37)
  - Fuel Consumption this week(L/100km) => Fuel Consumption this week (L/100km) (#47)

- [fleets.js](/src/app/utils/lang/en/fleets.js)
  - Active => Active vehicles (#17)
  - Vin => VIN (#30)
  - Operator => Fleet operator (#39)
  - Active Vehicles => Active vehicles (#42)

- [ownerAndOperator_ch.js](/src/app/utils/lang/en/ownerAndOperator_ch.js)
  - E-mail => Email (#7, #8, #9, #31, #49, #50, #57, #62)

- [driver.js](/src/app/utils/lang/en/driver.js)
  - Active Drivers => Active drivers (#7)
  - License => License No. (#12)

- [report.js](/src/app/utils/lang/en/report.js)
  - 'Copy of ' => '' (#52, prefix text no need)
  - Licence No. => (#22)
  - Events Over-Rev => Events Harsh RPM (#30)

- [alarms.js](/src/app/utils/lang/en/alarms.js)
  - Alarm => Alarm type (#5)
