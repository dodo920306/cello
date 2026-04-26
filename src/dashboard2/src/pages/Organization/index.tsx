import { PageContainer, ProTable } from "@ant-design/pro-components";

const OrganizationList: React.FC<unknown> = () => {
  return (
    <PageContainer
      header={{
        title: 'Organization',
      }}
    >
      <ProTable<OrganizationAPI.Info>
        rowKey="id"
      />
    </PageContainer>
  );
};

export default OrganizationList;
