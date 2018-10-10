import MyAlertComponent from './MyAlert.vue'

const MyAlert = {};

//注册Loading
MyAlert.install = function (Vue, myPluginOptions={}) {
    //生成一个Vue的子类LoadingConstructor，该子类就是loading组件
    const MyAlertConstructor = Vue.extend(MyAlertComponent);
    //生成一个该子类的实例
    const my_alert = new MyAlertConstructor();
    //将这个实例挂载到我创建的div
    my_alert.$mount(document.createElement('div'));
    //将创建的div加入全局挂载点内部
    document.body.appendChild(my_alert.$el);

    //通过Vue原型注册一个方法，让所有的实例共享这个方法
    //打开
    Vue.prototype.$myAlertOpen = function (msg, queryCallback=function () {}, cancerCallback=function () {}) {

        my_alert.msg = msg;
        my_alert.queryCallback = queryCallback;
        my_alert.cancerCallback = cancerCallback;
        my_alert.show = true;
    };
    //关闭
    Vue.prototype.$myAlertClose = function () {
        window.setTimeout(function () {
            my_alert.show = false;
        }, 1000);
    }

}
export default MyAlert

