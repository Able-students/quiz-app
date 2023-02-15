import Header from "./Header";
import { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Spin, Result, Pagination } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import mainActions from "../store/actions/mainActions";

const MovieList = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.mainReducer)
    const [movieData,setMovieData] = useState({})
    useEffect(()=>{
       dispatch(mainActions.loadMovieList(setMovieData))
    },[])
    return(
        <div>
              <Header basketItems={state.basketList.length} />
            <Row>
                {
                    movieData?.results?.length > 0 ? movieData?.results.map((elem => (
                        <Col span={6} key={elem.id} style={{ marginBottom: '10px' }}>
                            <Card
                                title={elem.title}
                                bordered={true}
                                style={{
                                    width: 300,
                                }}
                            >
                                  <img 
                                    src={'https://image.tmdb.org/t/p/w500' + elem?.poster_path} 
                                    alt={elem?.title} 
                                    style={{width: '100%'}}
                                    onError={(e) => {e.target.src='https://admin.itsnicethat.com/images/ladi0evZoRWdLE6iQuFstqGG_Fw=/51842/format-webp%7Cwidth-2880/5530f1de5c3e3c0370005fca.png'}}/>
                                <p>{elem.overview}</p>
                                <hr/>
                                <h3>{elem.release_date}</h3>
                            </Card>
                        </Col>
                    ))) : state.error === '404' ? 
                            <Col span={24}>
                                <Result
                                status="404"
                                title="404"
                                subTitle="Sorry, the page you visited does not exist."
                                extra={<Button type="primary">Back Home</Button>}
                                />
                            </Col> :
                            <Col span={24} style={{marginTop: '20%'}}>
                                <Spin tip="Loading" size="large">
                                    <div className="content" />
                                </Spin>
                            </Col>
                }
            </Row>
            {movieData?.results?.length > 0 && 
                <div className="center">
                    <Pagination 
                        defaultPageSize={movieData?.results?.length} 
                        onChange={(page) => { dispatch(mainActions.loadMovieList(setMovieData,page))}} 
                        defaultCurrent={movieData?.page} 
                        total={movieData?.total_results}
                        showSizeChanger={false}
                    />
                </div>}
        </div>
    )
}

export default MovieList;