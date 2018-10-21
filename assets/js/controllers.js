angular.module('ControllersModule', [])
    .controller('MainController', ['$log', '$scope', '$timeout', MainController])
    .controller('LoginController', ['$scope', '$window', '$state', '$cookies', '$log', '$timeout', LoginController])
    .controller('RegisterController', ['$scope', '$window', '$state', '$cookies', '$log', '$timeout', RegisterController])
    .controller('TracksController', ['$scope', '$timeout', TracksController])
    .controller('GameController', ['$scope', '$window', '$state', GameController])
    .controller('DashboardController', ['$scope', '$timeout', DashboardController])
    .controller('NewGuysController', ['$scope', '$cookies', NewGuysController]);

    function MainController($log, $scope, $timeout) {

        $scope.pageloaded = false;
        document.getElementById("mainPage").style.background = "black";

        $timeout(function() {
            document.getElementById("mainPage").style.background = "white";
            $scope.pageloaded = true;
        }, 2000)

        // if ('serviceWorker' in navigator) { //checks if service worker is supported by the browser.
        //     const registration = navigator.serviceWorker.register('../../sw.js', { scope: '/' }); //If yea, register it and assign the returned object the const registration.
        //     $log.log('Registered service worker' + registration);
        // }
        // else {                                          //else, there is no service worker support for the browser.
        //     $log.log('Browser does not support service workers!');
        //     return;
        // }
    }

    function TracksController($scope, $timeout) {

        $scope.tracksloaded = false;
        //document.getElementById("registerpage").style.background = "black";

        $timeout(function() {
            //document.getElementById("registerpage").style.background = "white";
            $scope.tracksloaded = true;
        }, 1500);
    }

    function DashboardController($scope, $timeout) {

        $scope.dashboardloaded = false;
        //document.getElementById("registerpage").style.background = "black";

        $timeout(function() {
            //document.getElementById("registerpage").style.background = "white";
            $scope.dashboardloaded = true;
        }, 1500);
    }

    function NewGuysController($scope, $cookies) {
        var user = $cookies.getObject("Users");

        $log.log("User here: ", user);

        $scope.fullname = user.fullname;
    }

    function GameController($scope, $window) {
        let words = ["abject","aberration","abjure","abnegation","abrogate","abscond","abstruse","accede","accost","accretion","acumen","adamant","admonish","adumbrate","adverse","advocate","affluent","aggrandize","alacrity","alias","ambivalent","amenable","amorphous","anachronistic","anathema","annex","antediluvian","antiseptic","apathetic","antithesis","apocryphal","approbation","arbitrary","arboreal","arcane","archetypal","arrogate","vestige","vicissitude","vilify","virtuoso","vitriolic","vituperate","vociferous","wanton"];

        var calledword;
        $scope.speaker = function() {
            $scope.randomword = words[Math.floor(Math.random()*words.length)];
            calledword = $scope.randomword;
            return responsiveVoice.speak($scope.randomword);
        };

        $scope.repeat = function() {
            return responsiveVoice.speak(calledword)
        }

        $scope.check = function() {
            if(!$scope.speltword || ($scope.speltword && $scope.speltword.trim() === '')) {
                $window.alert("Please enter a word.")
            }
            else {
                var speltword = $scope.speltword;
                console.log("Speltword: ", $scope.speltword, "randomword: ", $scope.randomword);
                if(speltword === $scope.randomword) {
                    $window.alert("That's correct!")
                }
                else {
                    $window.alert("Ooops! Wrong. The correct word is: " +  $scope.randomword.toUpperCase());
                }
            }
        }

    }

    function RegisterController ($scope, $window, $state, $cookies, $log, $timeout) {

        $scope.registerloaded = false;
        document.getElementById("registerpage").style.background = "black";

        $timeout(function() {
            document.getElementById("registerpage").style.background = "white";
            $scope.registerloaded = true;
        }, 1500);

        $scope.register = function register() {

            let fullname = $scope.fullname;
            let email = $scope.email;
            let password = $scope.password;
            let confirm_password = $scope.confirm_password;

            function validateEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase()); //ng-pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/"
            }

            let validmail = validateEmail(email);

            if (!fullname || (fullname && fullname.trim() === '')) {
                $window.alert("Full name is required.")
            }
            else if (!email || (email && email.trim() === '')) {
                $window.alert("Please enter your email address.")
            }
            else if (!validmail) {
                $window.alert("The email address you entered is not valid.")
            }
            else if (!password || (password && password.trim() === '')) {
                $window.alert("Please enter your password.")
            }
            else if (password && password.trim().length < 8) {
                $window.alert("Password Must have at least 8 characters.")
            }
            else if (!confirm_password || (confirm_password && confirm_password.trim() === '')) {
                $window.alert("Please confirm your password.")
            }
            else if (password !== confirm_password) {
                $window.alert("Your passwords do not match.")
            }
            else {
                console.log("Data: ", fullname, email, password);

                let users = {
                    fullname: fullname,
                    email: email
                };

                $cookies.putObject("Users", users);

                $log.log($cookies.getObject("Users"));

                $state.go("tracks");
            }
        };
    }

    function LoginController ($scope, $window, $state, $cookies, $log, $timeout) {

        $scope.loginloaded = false;
        document.getElementById("loginpage").style.background = "black";

        $timeout(function() {
            document.getElementById("loginpage").style.background = "white";
            $scope.loginloaded = true;
        }, 1500);

        $scope.login = function login() {

            let email = $scope.email;
            let password = $scope.password;

            if(!email || (email && email.trim() === '')) {
                $window.alert("Please enter your email address.")
            }
            else if(!password || (password && password.trim() === '')) {
                $window.alert("Please enter your password.")
            }
            else {
                $state.go("dashboard");

                // var user = $cookies.getObject("Users");
                //
                // $log.log("User here: ", user);
                //
                // if(user && user.email === email) {
                //     $state.go("dashboard");
                // }
                // else {
                //     $window.alert("Your email or password is incorrect.")
                // }
                // $log.log("User here: ", user);
            }
        }
    }