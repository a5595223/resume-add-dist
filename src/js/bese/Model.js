window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = 't5SXd57tbmE2h6VXYVm44hDU-gzGzoHsz'
            var APP_KEY = 'sHg8wcctQnP9ta7F2Ui8imHJ'

            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        fetch: function () {
            var query = new AV.Query(resourceName);
            return query.find()
        },
        save: function (object) {
            var instance = AV.Object.extend(resourceName);

            var x = new instance();
            return x.save(object)
        }
    }
}