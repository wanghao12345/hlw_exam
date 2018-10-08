import LoadingComponent from './loading.vue'

const Loading = {};

//注册Loading
Loading.install = function (Vue, myPluginOptions={}) {
    //生成一个Vue的子类LoadingConstructor，该子类就是loading组件
    const LoadingConstructor = Vue.extend(LoadingComponent);
    //生成一个该子类的实例
    const loading = new LoadingConstructor();
    //将这个实例挂载到我创建的div
    loading.$mount(document.createElement('div'));
    //将创建的div加入全局挂载点内部
    document.body.appendChild(loading.$el);

    //通过Vue原型注册一个方法，让所有的实例共享这个方法
    //打开
    Vue.prototype.$loadingOpen = function () {
        loading.show = true;
    };
    //关闭
    Vue.prototype.$loadingClose = function () {
        window.setTimeout(function () {
            loading.show = false;
        }, 1000);
    }

}
export default Loading

