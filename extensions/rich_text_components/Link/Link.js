// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Directive for the Link rich-text component.
 *
 * IMPORTANT NOTE: The naming convention for customization args that are passed
 * into the directive is: the name of the parameter, followed by 'With',
 * followed by the name of the arg.
 */
oppia.directive('oppiaNoninteractiveLink', [
  'oppiaHtmlEscaper', function(oppiaHtmlEscaper) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'richTextComponent/Link',
      controller: ['$scope', '$attrs', function($scope, $attrs) {
        if (!$attrs.openLinkInSameWindowWithValue) {
          // This is done for backward-compatibility.
          $scope.target = '_blank';
        } else {
          $scope.target = (
            oppiaHtmlEscaper.escapedJsonToObj(
              $attrs.openLinkInSameWindowWithValue) ? '_top' : '_blank');
        }

        var untrustedUrl = oppiaHtmlEscaper.escapedJsonToObj(
          $attrs.urlWithValue);
        if (untrustedUrl.indexOf('http://') !== 0 &&
            untrustedUrl.indexOf('https://') !== 0) {
          return;
        }
        $scope.url = untrustedUrl;
      }]
    };
  }
]);
