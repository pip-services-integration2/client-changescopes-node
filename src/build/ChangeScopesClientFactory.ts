import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { ChangeScopesNullClientV1 } from '../version1/ChangeScopesNullClientV1';
import { ChangeScopesDirectClientV1 } from '../version1/ChangeScopesDirectClientV1';
import { ChangeScopesCommandableHttpClientV1 } from '../version1/ChangeScopesCommandableHttpClientV1';
import { ChangeScopesCommandableLambdaClientV1 } from '../version1/ChangeScopesCommandableLambdaClientV1';

export class ChangeScopesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-changescopes', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-changescopes', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-changescopes', 'client', 'direct', 'default', '1.0');
	public static CmdHttpClientV1Descriptor = new Descriptor('service-changescopes', 'client', 'commandable-http', 'default', '1.0');
	public static CmdLambdaClientV1Descriptor = new Descriptor('service-changescopes', 'client', 'commandable-lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(ChangeScopesClientFactory.NullClientV1Descriptor, ChangeScopesNullClientV1);
		this.registerAsType(ChangeScopesClientFactory.DirectClientV1Descriptor, ChangeScopesDirectClientV1);
		this.registerAsType(ChangeScopesClientFactory.CmdHttpClientV1Descriptor, ChangeScopesCommandableHttpClientV1);
		this.registerAsType(ChangeScopesClientFactory.CmdLambdaClientV1Descriptor, ChangeScopesCommandableLambdaClientV1);
	}
	
}
