import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { Tabs, theme } from 'antd';
import { Helmet } from '@umijs/max';
import { useState } from 'react';


type ActionType = 'login' | 'register';

const AccessPage: React.FC = () => {
  const { token } = theme.useToken();
  const [actionType, setActionType] = useState<ActionType>('login');
  return (
    <>
      <Helmet>
        <title>Login - Cello Dashboard</title>
      </Helmet>
      <div
        style={{
          height: "100vh",
          background: token.colorBgLayout,
          backgroundImage: "url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg')",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", 
        }}
      >
        <div>
          <LoginForm
            logo="/favicon.png"
            title="Cello Dashboard"
            subTitle="Dashboard for management cello service"
          >
            <Tabs
              centered
              activeKey={actionType}
              onChange={(activeKey) => setActionType(activeKey as ActionType)}
              items={[
                { key: 'login', label: '登录' },
                { key: 'register', label: '注册' },
              ]}
            />
            <ProFormText
              name="email"
              fieldProps={{
                size: 'large',
                prefix: <MailOutlined className={'prefixIcon'} />,
              }}
              placeholder={'邮箱地址'}
              rules={[
                {
                  required: true,
                  message: '请输入邮箱地址!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码!',
                },
              ]}
            />
          </LoginForm>
        </div>
      </div>
    </>
  );
};

export default AccessPage;
