<?php

require_once('FormProcessor.php');

$form = array(
    'subject' => 'New Form Submission',
    'email_message' => 'You have a new form submission',
    'success_redirect' => '',
    'sendIpAddress' => true,
    'email' => array(
    'from' => '',
    'to' => ''
    ),
    'fields' => array(
    'name' => array(
    'order' => 1,
    'type' => 'string',
    'label' => 'Name',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Name\' is required.'
    )
    ),
    'phone' => array(
    'order' => 2,
    'type' => 'tel',
    'label' => 'Phone',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Phone\' is required.'
    )
    ),
    'email' => array(
    'order' => 3,
    'type' => 'email',
    'label' => 'Email',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Email\' is required.'
    )
    ),
    'address' => array(
    'order' => 4,
    'type' => 'string',
    'label' => 'Address',
    'required' => false,
    'errors' => array(
    'required' => 'Field \'Address\' is required.'
    )
    ),
    'date' => array(
    'order' => 5,
    'type' => 'string',
    'label' => 'Receive Date',
    'required' => true,
    'errors' => array(
    'required' => 'Field \'Receive Date\' is required.'
    )
    ),
    'select' => array(
    'order' => 6,
    'type' => 'string',
    'label' => 'Amount of Order',
    'required' => false,
    'errors' => array(
    'required' => 'Field \'Amount of Order\' is required.'
    )
    ),
    'message' => array(
    'order' => 7,
    'type' => 'string',
    'label' => 'Comment',
    'required' => false,
    'errors' => array(
    'required' => 'Field \'Comment\' is required.'
    )
    ),
    )
    );

    $processor = new FormProcessor('');
    $processor->process($form);

    ?>