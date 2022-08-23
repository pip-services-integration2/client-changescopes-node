import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { ChangeScopesNullClientV1 } from '../version1/ChangeScopesNullClientV1';
import { ChangeScopesDirectClientV1 } from '../version1/ChangeScopesDirectClientV1';
import { ChangeScopesHttpClientV1 } from '../version1/ChangeScopesHttpClientV1';
import { ChangeScopesLambdaClientV1 } from '../version1/ChangeScopesLambdaClientV1';

export class ChangeScopesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-changescopes', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-changescopes', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-changescopes', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-changescopes', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('service-changescopes', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(ChangeScopesClientFactory.NullClientV1Descriptor, ChangeScopesNullClientV1);
		this.registerAsType(ChangeScopesClientFactory.DirectClientV1Descriptor, ChangeScopesDirectClientV1);
		this.registerAsType(ChangeScopesClientFactory.HttpClientV1Descriptor, ChangeScopesHttpClientV1);
		this.registerAsType(ChangeScopesClientFactory.LambdaClientV1Descriptor, ChangeScopesLambdaClientV1);
	}
	
}
