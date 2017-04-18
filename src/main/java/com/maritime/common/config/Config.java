//
//package com.maritime.common.config;
//
//import org.apache.ibatis.session.SqlSessionFactory;
//import org.mybatis.spring.SqlSessionFactoryBean;
//import org.mybatis.spring.annotation.MapperScan;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.context.properties.EnableConfigurationProperties;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.EnableAspectJAutoProxy;
//import org.springframework.context.annotation.Scope;
//import org.springframework.core.io.Resource;
//import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
//import org.springframework.core.io.support.ResourcePatternResolver;
//import org.springframework.jdbc.datasource.DataSourceTransactionManager;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//import org.springframework.transaction.PlatformTransactionManager;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
//import javax.sql.DataSource;
//
///**
// *
// * @author
// *
// *         To initialize basic beans into container, i.e. dataSource, transactionManager, sqlSessionFaction, passwordEncoder etc. It also enables basic spring
// *         functionalities for our utilization by an annotation approach in the business logic, i.e. it is able to put a @Transactional in a service class to
// *         manage the transaction
// */
//@Configuration
//@EnableConfigurationProperties(ConfigProperties.class)
//@EnableTransactionManagement
//@MapperScan("com.maritime.com.maritime.dao.mappers")
//@EnableAspectJAutoProxy
//public class Config {
//
//	@Autowired
//	ConfigProperties configProperties;
//
//	/**
//	 * Spring container will initialize a bean whose name is dataSource.
//	 *
//	 * @return a DataSource instance
//	 */
//	@Bean
//	@Scope(value = "singleton")
//	public DataSource dataSource() {
//		DriverManagerDataSource ds = new DriverManagerDataSource();
//		ds.setDriverClassName(configProperties.getDbDriverClassName());
//		ds.setUsername(configProperties.getDbUsername());
//		ds.setPassword(configProperties.getDbPassword());
//		ds.setUrl(configProperties.getDbUrl());
//
//		return ds;
//	}
//
//	/**
//	 * Spring container will initialize a bean whose name is transactionManager to manage transactions defined in ServiceImpl classes.
//	 *
//	 * @return a TransactionManager instance
//	 */
//	@Bean
//	public PlatformTransactionManager transactionManager() {
//		return new DataSourceTransactionManager(dataSource());
//	}
//
//	/**
//	 * Spring container will initialize a bean whose name is sqlSessionFactory, which is from MyBatis framework
//	 *
//	 * @return a SqlSessionFactory instance
//	 */
//	@Bean
//	public SqlSessionFactory sqlSessionFactory() throws Exception {
//
//		SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
//		factoryBean.setDataSource(dataSource());
//
//		ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
//		Resource[] resource = resolver.getResources("classpath:*/mappers/*.xml");
//		factoryBean.setMapperLocations(resource);
//
//		SqlSessionFactory sqlSessionFactory = factoryBean.getObject();
//
//		return sqlSessionFactory;
//	}
//
//}
