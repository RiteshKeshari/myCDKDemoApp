import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MyCdkDemoAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const demoBucket = new CfnBucket(this, 'cfnBucket', {
      versioningConfiguration: {
        status: "Enabled"
      }
    })

    const secDemoBucket = new Bucket(this, 'L2Bucket', {
      versioned: true
    })
  }
}
