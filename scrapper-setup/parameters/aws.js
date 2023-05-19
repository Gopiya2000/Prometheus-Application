const paramsArray = [
    {
        service: 'EC2', action: 'CPU', params: {
            Namespace: 'AWS/EC2',
            MetricName: 'CPUUtilization',
            Interval: '10mins',
            Period: 30,
            Statistics: ['Maximum'],
            Name: 'aws_EC2_CPU_gauge',
            Help: 'AWS EC2 CPU gauge',
            Dimensions: [
                {
                    Name: 'InstanceId',
                    Value: 'i-0baa917c4b22ca538'
                }
            ]
        }
    },
    {
        service: 'EC2', action: 'CPUAverage', params: {
            Namespace: 'AWS/EC2',
            MetricName: 'CPUUtilization',
            Interval: '5mins',
            Period: 30,
            Statistics: ['Maximum'],
            Name: 'aws_EC2_CPUAverage_gauge',
            Help: 'AWS EC2 CPUAverage gauge',
            Dimensions: [
                {
                    Name: 'InstanceId',
                    Value: 'i-0baa917c4b22ca538'
                }
            ]
        }
    },
    {
        service: 'EC2', action: 'NetworkOut', params: {
            Namespace: 'AWS/EC2',
            MetricName: 'NetworkOut',
            Interval: '10mins',
            Period: 30,
            Statistics: ['Average'],
            Name: 'aws_EC2_NetworkOut_gauge',
            Help: 'AWS EC2 NetworkOut gauge',
            Dimensions: [
                {
                    Name: 'InstanceId',
                    Value: 'i-0baa917c4b22ca538'
                }
            ]
        }
    },
    {
        service: 'EC2', action: 'NetworkIn', params: {
            Namespace: 'AWS/EC2',
            MetricName: 'NetworkIn',
            Interval: '5mins',
            Period: 30,
            Statistics: ['Average'],
            Name: 'aws_EC2_NetworkIn_gauge',
            Help: 'AWS EC2 NetworkIn gauge',
            Dimensions: [
                {
                    Name: 'InstanceId',
                    Value: 'i-0baa917c4b22ca538'
                }
            ]
        }
    },
    {
        service: 'EC2', action: 'CPUCreditUsage', params: {
            Namespace: 'AWS/EC2',
            MetricName: 'CPUCreditUsage',
            Interval: '5mins',
            Period: 30,
            Statistics: ['Average'],
            Name: 'aws_EC2_CPUCreditUsage_gauge',
            Help: 'AWS EC2 CPUCreditUsage gauge',
            Dimensions: [
                {
                    Name: 'InstanceId',
                    Value: 'i-0baa917c4b22ca538'
                }
            ]
        }
    },
    {
        service: 'EC2',
        action: 'CPUUtilization',
        params: {
            Namespace: 'AWS/EC2',
            MetricName: 'CPUUtilization',
            Interval: '5mins',
            Period: 30,
            Statistics: ['Average'],
            Name: 'aws_EC2_CPUUtilization_gauge',
            Help: 'AWS EC2 CPUUtilization gauge',
            Dimensions: [
                {
                    Name: 'InstanceId',
                    Value: 'i-0baa917c4b22ca538'
                }
            ],
            Unit: 'Percent',
            Debug: true,
            EndpointUrl: 'http://localhost:9090',
            NoVerifySSL: true,
            NoPaginate: false,
            Output: 'json',
            Region: 'eu-north-1',
            Version: "^3.329.0",
            Color: 'auto',
            NoSignRequest: false,
            CliReadTimeout: 120,
            CliConnectTimeout: 30
        }
    },
    {
        service: 'Lambda',
        action: 'Invocations',
        params: {
            Namespace: 'AWS/Lambda',
            MetricName: 'Invocations',
            Interval: '5mins',
            Period: 30,
            Statistics: ['Sum'],
            Name: 'aws_Lambda_invocations_gauge',
            Help: 'AWS Lambda Invocations gauge',
            Dimensions: [
                {
                    Name: 'FunctionName',
                    Value: 'function',
                },
                {
                    Name: 'Resource',
                    Value: 'arn:aws:lambda:eu-north-1:292843228182:function:function',
                },
            ],
        },
    },
    {
        service: 'Kinesis',
        action: 'IncomingBytes',
        params: {
            Namespace: 'AWS/Kinesis',
            MetricName: 'IncomingBytes',
            Interval: '5mins',
            Period: 30,
            Statistics: ['Sum'],
            Name: 'aws_kinesis_incomingBytes_gauge',
            Help: 'AWS Kinesis IncomingBytes gauge',
            Dimensions: [
                {
                    Name: 'StreamName',
                    Value: 'myStream'
                },
                {
                    Name: 'Resource',
                    Value: 'arn:aws:kinesis:eu-north-1:292843228182:stream/Stream'
                }
            ]
        }
    }
]

module.exports = paramsArray;