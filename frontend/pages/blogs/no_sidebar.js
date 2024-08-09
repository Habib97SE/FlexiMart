import React from 'react';
import { Container, Row ,Col} from 'reactstrap';
import CommonLayout from '../../components/shop/common-layout';
import BlogList from './common/blog-list';

const BlogDetail = () => {
    return (
        <CommonLayout parent="home" title="blog">
            <section className="section-b-space blog-page ratio2_3 no-sidebar">
                <Container>
                    <Row>
                        <Col>
                            <BlogList />
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default BlogDetail;