import { Card, Col, Layout, Row } from 'antd';
const { Header, Content } = Layout;
const headerStyle = {
  color: '#fff',
  backgroundColor: 'black',
  height: '25%'
};
const contentStyle = {
  color: '#fffff4',
  backgroundColor: '#333333',
  paddingLeft: '2em',
  paddingRight: '2em',
  height: '75%',
  fontSize: '1.2em'
};
const imageStyle = {
  height: '15em',
  width: '20em',
}
function App() {
  return (
    <Layout >
      <Header style={headerStyle}>
        <h1>Tina's Portfolio</h1>
      </Header>
      <Content style={contentStyle}>
        <Row>
          <h4 style={{}}>
            Hi, thank you for checking out my portfolio.
            I will be using this page to share my work experience, project ideas, blogs, and reflections.
          </h4>
          <p>
            Feel free to reach out to me by email (<b>testrunmymails@gmail.com</b>) or telegram (<b>@TinaYTina</b>)!
            <br />
            [Note: Uncalled-for messages will not be tolerated. I will have to block you.]
          </p>
        </Row>
        <Row>
          <Col>
            <Card title="LineType" style={{ width: '20em', marginBottom: '2em', marginRight: '1em', marginLeft: '1em', height: '28em' }}
              cover={<img alt="example" src="linetype.jpg" style={imageStyle} />}
            >
              <p >
                I have recently worked on building LineType's MVP using react js, antd, and firebase.
              </p>
            </Card>
          </Col>
          <Col>
            <Card title="NUSocial" style={{ width: '20em', marginBottom: '2em', height: '28em' }}
              cover={<img alt="example" src="nusocial.jpg" style={imageStyle} />}
            >
              <p>
                Orbital 2021 project (a simple social media webapp).
              </p>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout >
  );
}

export default App;
