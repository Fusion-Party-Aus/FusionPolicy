<script lang="ts">
	import { FormRow, Label, TextArea } from "$lib/FormComponents";

    let submit = () => {
        console.log('submitted');
    }

    export let workstream = {
        header: 'Housing affordability'
    }

    export let submission = {
        summaryAssessment: '',
        benefit: '',
    }

</script>

<div class="w-full">
    <h1>{workstream.header}</h1>

    <h2>Phase 1 - Problem Identification</h2>
    <p class="pb-2">This form is used to report your research and analysis of the problems identified in the policy proposal. It provides a structured way to assess the scope and scale of the problem the policy is likely to attempt to resolve.</p>
    <FormRow>
        <h4>1. Your summary assessment of the problem. </h4>
        <TextArea value={submission.summaryAssessment}></TextArea>
    </FormRow>

    <FormRow>
        <h4>2. The number of Australians likely to directly use/benefit from the policy?</h4>
        <small>
            <ul>
                <li>
                    (Please identify if the beneficiaries can be properly identified or this is a broad social good?)
                </li>
                <li>
                    (Please identify if you can the actual number of Australians affected over what timeline?)
                </li>
                <li>
                    (If the matter is a broad social good or values based policy related to our party state this and clarify).
                </li>
            </ul>
        </small>
        <TextArea value={submission.benefit}></TextArea>
    </FormRow>

    <FormRow>
        <h4>3. The significance of the use/benefit for these Australians? </h4>
        <small>
            (While the policy may only affect a few Australians, the benefit may be substantial, please explain).
            (If the policy is a broad or an ecological public good then please clarify the significance geographically, morally or legally)
        </small>
        <TextArea value={submission.benefit}></TextArea>
    </FormRow>
    <button on:click={submit}>Submit</button>
</div>
