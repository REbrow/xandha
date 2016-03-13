
$('input[name="daterange"]').daterangepicker(
{
    locale: {
      format: 'YYYY-MM-DD'
    },
    autoUpdateInput: false,
    singleDatePicker: true,
    showDropdowns: true,
    startDate: '2013-01-01',
    endDate: '2013-12-31'
},
function(start, end) {
	'use strict';
    console.log('A new date range was chosen: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
});
