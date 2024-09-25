'use client'

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Activity, Box, Cpu, MessageSquare, Settings, Tag, Zap } from 'lucide-react'

export function LogisticsIoTPlatformComponent() {
  const [activeTab, setActiveTab] = useState("device-management")

  // 模拟数据
  const devices = [
    { id: 1, name: "温度传感器001", type: "直连设备", status: "在线", protocol: "MQTT" },
    { id: 2, name: "网关001", type: "网关", status: "在线", protocol: "HTTPS" },
    { id: 3, name: "湿度传感器001", type: "子设备", status: "离线", protocol: "CoAP" },
    { id: 4, name: "GPS定位器001", type: "直连设备", status: "在线", protocol: "TCP" },
    { id: 5, name: "重量传感器001", type: "子设备", status: "在线", protocol: "MQTT" },
    { id: 6, name: "摄像头001", type: "直连设备", status: "离线", protocol: "RTSP" },
    { id: 7, name: "网关002", type: "网关", status: "在线", protocol: "HTTPS" },
    { id: 8, name: "温湿度传感器001", type: "子设备", status: "在线", protocol: "CoAP" },
  ]

  const apiCallsData = [
    { name: '周一', calls: 4000 },
    { name: '周二', calls: 3000 },
    { name: '周三', calls: 2000 },
    { name: '周四', calls: 2780 },
    { name: '周五', calls: 1890 },
    { name: '周六', calls: 2390 },
    { name: '周日', calls: 3490 },
  ]

  const tags = [
    { id: 1, name: "仓库A", type: "产品" },
    { id: 2, name: "运输车队1", type: "设备" },
    { id: 3, name: "温控设备", type: "产品" },
    { id: 4, name: "高优先级", type: "设备" },
  ]

  const rules = [
    { id: 1, name: "温度过高告警", condition: "温度 > 30℃", action: "发送短信" },
    { id: 2, name: "湿度异常转发", condition: "湿度 < 20% 或 湿度 > 80%", action: "数据转发至数据库" },
    { id: 3, name: "设备离线通知", condition: "设备状态变为离线", action: "发送邮件" },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">物流中心物联网平台</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
          <TabsTrigger value="device-management">
            <Cpu className="w-4 h-4 mr-2" />
            设备管理
          </TabsTrigger>
          <TabsTrigger value="protocol-adaptation">
            <Settings className="w-4 h-4 mr-2" />
            协议适配
          </TabsTrigger>
          <TabsTrigger value="tag-management">
            <Tag className="w-4 h-4 mr-2" />
            标签管理
          </TabsTrigger>
          <TabsTrigger value="rule-engine">
            <Zap className="w-4 h-4 mr-2" />
            规则引擎
          </TabsTrigger>
          <TabsTrigger value="monitoring">
            <Activity className="w-4 h-4 mr-2" />
            监控运维
          </TabsTrigger>
          <TabsTrigger value="online-debug">
            <MessageSquare className="w-4 h-4 mr-2" />
            在线调试
          </TabsTrigger>
          <TabsTrigger value="device-shadow">
            <Box className="w-4 h-4 mr-2" />
            设备影子
          </TabsTrigger>
        </TabsList>
        <TabsContent value="device-management">
          <Card>
            <CardHeader>
              <CardTitle>设备管理</CardTitle>
              <CardDescription>管理和监控已连接的设备</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>名称</TableHead>
                    <TableHead>类型</TableHead>
                    <TableHead>状态</TableHead>
                    <TableHead>协议</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {devices.map((device) => (
                    <TableRow key={device.id}>
                      <TableCell>{device.id}</TableCell>
                      <TableCell>{device.name}</TableCell>
                      <TableCell>{device.type}</TableCell>
                      <TableCell>
                        <Badge variant={device.status === "在线" ? "success" : "destructive"}>
                          {device.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{device.protocol}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="protocol-adaptation">
          <Card>
            <CardHeader>
              <CardTitle>协议适配</CardTitle>
              <CardDescription>管理设备协议和转换</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="选择协议" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mqtt">MQTT</SelectItem>
                  <SelectItem value="https">HTTPS</SelectItem>
                  <SelectItem value="tcp">TCP</SelectItem>
                  <SelectItem value="coap">CoAP</SelectItem>
                  <SelectItem value="jt808">JT/T 808</SelectItem>
                  <SelectItem value="tr069">TR069</SelectItem>
                </SelectContent>
              </Select>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">协议转换脚本</h3>
                <textarea
                  className="w-full h-32 p-2 border rounded"
                  placeholder="在此输入协议转换脚本..."
                ></textarea>
              </div>
              <Button className="mt-2">保存脚本</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tag-management">
          <Card>
            <CardHeader>
              <CardTitle>标签管理</CardTitle>
              <CardDescription>管理产品和设备标签</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2 mb-4">
                <Input placeholder="输入标签名称" />
                <Select>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="标签类型" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product">产品</SelectItem>
                    <SelectItem value="device">设备</SelectItem>
                  </SelectContent>
                </Select>
                <Button>添加标签</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>名称</TableHead>
                    <TableHead>类型</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tags.map((tag) => (
                    <TableRow key={tag.id}>
                      <TableCell>{tag.id}</TableCell>
                      <TableCell>{tag.name}</TableCell>
                      <TableCell>{tag.type}</TableCell>
                      <TableCell>
                        <Button variant="destructive" size="sm">删除</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rule-engine">
          <Card>
            <CardHeader>
              <CardTitle>规则引擎</CardTitle>
              <CardDescription>设置数据转发和告警规则</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="mb-4">创建新规则</Button>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>规则名称</TableHead>
                    <TableHead>触发条件</TableHead>
                    <TableHead>执行动作</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rules.map((rule) => (
                    <TableRow key={rule.id}>
                      <TableCell>{rule.id}</TableCell>
                      <TableCell>{rule.name}</TableCell>
                      <TableCell>{rule.condition}</TableCell>
                      <TableCell>{rule.action}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" className="mr-2">编辑</Button>
                        <Button variant="destructive" size="sm">删除</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="monitoring">
          <Card>
            <CardHeader>
              <CardTitle>监控运维</CardTitle>
              <CardDescription>监控设备状态和API调用</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <Card>
                  <CardHeader>
                    <CardTitle>在线设备</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>离线设备</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>未激活设备</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1</div>
                  </CardContent>
                </Card>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={apiCallsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="calls" name="API调用次数" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="online-debug">
          <Card>
            <CardHeader>
              <CardTitle>在线调试</CardTitle>
              <CardDescription>调试各种协议的设备</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="选择协议" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mqtt">MQTT</SelectItem>
                  <SelectItem value="lwm2m">LwM2M</SelectItem>
                  <SelectItem value="http">HTTP</SelectItem>
                  <SelectItem value="tcp">TCP</SelectItem>
                </SelectContent>
              </Select>
              <div className="mt-4">
                <textarea
                  className="w-full h-32 p-2 border rounded"
                  placeholder="在此输入调试命令..."
                ></textarea>
              </div>
              <Button className="mt-2">开始调试</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="device-shadow">
          <Card>
            <CardHeader>
              <CardTitle>设备影子</CardTitle>
              <CardDescription>查看和管理设备影子数据</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="选择设备" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">温度传感器001</SelectItem>
                  <SelectItem value="2">网关001</SelectItem>
                  <SelectItem value="3">湿度传感器001</SelectItem>
                  <SelectItem value="4">GPS定位器001</SelectItem>
                </SelectContent>
              </Select>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">影子数据</h3>
                <pre className="bg-gray-100 p-2 rounded mt-2">
                  {JSON.stringify({
                    reported: {
                      temperature: 25.5,
                      humidity: 60,
                      batteryLevel: 85
                    },
                    desired: {
                      temperature: 24.0,
                      humidity: 55,
                      updateInterval: 300
                    }
                  }, null, 2)}
                </pre>
              </div>
              <Button className="mt-2">更新期望状态</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}