'use strict';

angular.module('chaos')
  .controller('ExampleCtl', function ($scope) {
    $scope.samples = [
      { 'barcode': '456789', 'study': 'IIS', 'participantId': '100101', 'eventType': 'Enrollment', 'sampleType': 'Plasma', 'amount': '800.23 ul' },
      { 'barcode': '789456', 'study': 'IIS', 'participantId': '103101', 'eventType': 'Year 8', 'sampleType': 'Plasma', 'amount': '1201 ul' },
      { 'barcode': '123456', 'study': 'IIS', 'participantId': '101101', 'eventType': 'Year 8', 'sampleType': 'Plasma', 'amount': '1201 ul' },
      { 'barcode': '369546', 'study': 'CRS', 'participantId': 'B3101', 'eventType': 'In Depth 6', 'sampleType': 'Serum', 'amount': '1201 ul' },
      { 'barcode': '159778', 'study': 'CRS', 'participantId': 'B3101', 'eventType': 'In Depth 6', 'sampleType': 'Serum', 'amount': '800.23 ul' },
      { 'barcode': '987123', 'study': 'TESAOD', 'participantId': '1231301', 'eventType': 'Enrollment', 'sampleType': 'Serum', 'amount': '500 ul' },
      { 'barcode': '458124', 'study': 'CRS', 'participantId': 'A0101', 'eventType': 'Enrollment', 'sampleType': 'Plasma', 'amount': '800.23 ul' },
      { 'barcode': '348945', 'study': 'TESAOD', 'participantId': '1210101', 'eventType': 'Survey 32', 'sampleType': 'Serum', 'amount': '800.23 ul' },
      { 'barcode': '965445', 'study': 'TESAOD', 'participantId': '1210101', 'eventType': 'Survey 32', 'sampleType': 'Serum', 'amount': '800.23 ul' },
      { 'barcode': '458712', 'study': 'TESAOD', 'participantId': '1320101', 'eventType': 'Survey 32', 'sampleType': 'Serum', 'amount': '800.23 ul' },
      { 'barcode': '789159', 'study': 'IIS', 'participantId': '120101', 'eventType': 'Enrollment', 'sampleType': 'Serum', 'amount': '800.23 ul' },
      { 'barcode': '159489', 'study': 'IIS', 'participantId': '140101', 'eventType': 'Enrollment', 'sampleType': 'Serum', 'amount': '800.23 ul' }
    ];

  });
