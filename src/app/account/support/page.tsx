import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Shield, Package, Plus, Search, Filter, Calendar, AlertTriangle, CheckCircle, Clock, Gift, Award, Truck, MapPin, Edit, Eye, QrCode, Camera, Upload, ExternalLink, MessageCircle, Phone, Mail, HelpCircle, FileText, Download, Send } from 'lucide-react'

export default async function SupportPage() {
  // 临时跳过登录验证，用于测试
  // const token = getCustomerAccessToken()
  
  // if (!token) {
  //   redirect('/login')
  // }

  // const customer = await getCustomer(token)
  
  // if (!customer) {
  //   redirect('/login')
  // }

  // 模拟支持案例数据
  const supportCases = [
    {
      id: '1',
      caseNumber: 'SF-2024-001',
      subject: 'Audio quality issue with OpenRun Pro',
      status: 'in_progress',
      priority: 'high',
      createdDate: '2024-01-15T10:30:00Z',
      lastUpdate: '2024-01-16T14:20:00Z',
      assignedTo: 'Sarah Johnson',
      category: 'warranty_claim'
    },
    {
      id: '2',
      caseNumber: 'SF-2024-002',
      subject: 'Product registration assistance',
      status: 'resolved',
      priority: 'medium',
      createdDate: '2024-01-10T09:15:00Z',
      lastUpdate: '2024-01-12T16:45:00Z',
      assignedTo: 'Mike Chen',
      category: 'product_registration'
    }
  ]

  // 模拟FAQ数据
  const faqCategories = [
    {
      category: 'Product Registration',
      questions: [
        {
          question: 'How do I register my Shokz product?',
          answer: 'You can register your product by scanning the QR code on the packaging, entering details manually, or linking to your order history if purchased from Shokz.com.'
        },
        {
          question: 'Can I register products purchased from other retailers?',
          answer: 'Yes! All Shokz products are covered by warranty regardless of where you purchased them. Simply register using the serial number and purchase information.'
        }
      ]
    },
    {
      category: 'Warranty Claims',
      questions: [
        {
          question: 'What is covered under warranty?',
          answer: 'Our 2-year limited warranty covers manufacturing defects, audio quality issues, battery performance problems, and water resistance failures.'
        },
        {
          question: 'How long does warranty processing take?',
          answer: 'Most warranty claims are processed within 5-7 business days. Complex cases may take up to 14 days.'
        }
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Support Center
          </h1>
        </div>
        <p className="text-gray-600">
          Get help with your Shokz products, warranty claims, and account questions
        </p>
      </div>

      {/* Salesforce Service Cloud集成提示 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <Shield className="h-4 w-4 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-blue-900 mb-1">Salesforce Service Cloud Integration</h3>
            <p className="text-sm text-blue-800">
              Our support system is powered by Salesforce Service Cloud, ensuring fast and efficient resolution of your inquiries. 
              All cases are tracked and managed through our integrated platform.
            </p>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 左列 - 支持选项 */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* 快速支持选项 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Get Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* 在线聊天 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Live Chat</h3>
                    <p className="text-sm text-gray-600">Available 24/7</p>
                  </div>
                </div>
                <Button className="w-full" size="sm">
                  Start Chat
                </Button>
              </div>
              
              {/* 电话支持 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone Support</h3>
                    <p className="text-sm text-gray-600">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <Button className="w-full" size="sm" variant="outline">
                  Call Now
                </Button>
              </div>
              
              {/* 邮件支持 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email Support</h3>
                    <p className="text-sm text-gray-600">Response within 24 hours</p>
                  </div>
                </div>
                <Button className="w-full" size="sm" variant="outline">
                  Send Email
                </Button>
              </div>
              
              {/* 提交案例 */}
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Submit Case</h3>
                    <p className="text-sm text-gray-600">Create a support ticket</p>
                  </div>
                </div>
                <Button className="w-full" size="sm" variant="outline">
                  Create Case
                </Button>
              </div>
            </div>
          </div>

          {/* 我的支持案例 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">My Support Cases</h2>
                <Button size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  New Case
                </Button>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-4">
                {supportCases.map((case_) => (
                  <div key={case_.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-medium text-gray-900">{case_.subject}</h3>
                        <p className="text-sm text-gray-600">Case #{case_.caseNumber}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          case_.status === 'in_progress' 
                            ? 'bg-blue-100 text-blue-800'
                            : case_.status === 'resolved'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {case_.status === 'in_progress' ? 'In Progress' : 
                           case_.status === 'resolved' ? 'Resolved' : 'Open'}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          case_.priority === 'high' 
                            ? 'bg-red-100 text-red-800'
                            : case_.priority === 'medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {case_.priority === 'high' ? 'High' : 
                           case_.priority === 'medium' ? 'Medium' : 'Low'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-sm text-gray-600">Created</p>
                        <p className="font-medium text-gray-900">
                          {new Date(case_.createdDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Assigned To</p>
                        <p className="font-medium text-gray-900">{case_.assignedTo}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="text-sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Add Comment
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 右列 - FAQ和资源 */}
        <div className="space-y-6">
          
          {/* FAQ */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-4">
                {faqCategories.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-gray-900 mb-2">{category.category}</h3>
                    <div className="space-y-2">
                      {category.questions.map((faq, idx) => (
                        <div key={idx} className="border border-gray-100 rounded-lg p-3">
                          <h4 className="font-medium text-gray-900 text-sm mb-1">{faq.question}</h4>
                          <p className="text-sm text-gray-600">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 快速资源 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Quick Resources</h2>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Download className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Download Manual</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <ExternalLink className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Video Tutorials</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <HelpCircle className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Troubleshooting Guide</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Calendar className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Schedule Callback</span>
                </button>
              </div>
            </div>
          </div>

          {/* 联系信息 */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Contact Information</h2>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">support@shokz.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">Hours</p>
                    <p className="text-sm text-gray-600">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}